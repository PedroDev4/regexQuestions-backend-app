import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateManyAnswersUseCase } from "./CreateManyAnswersUseCase";

class CreateManyAnswersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { answers } = request.body
    
    const createManyAnswersUseCase = container.resolve(CreateManyAnswersUseCase)

    await createManyAnswersUseCase.execute(answers)

    return response.status(201).send()
  }
}

export {CreateManyAnswersController}