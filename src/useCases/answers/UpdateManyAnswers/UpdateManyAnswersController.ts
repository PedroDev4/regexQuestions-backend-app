import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateManyUseCase } from "./UpdateManyAnswersUseCase";

class UpdateManyAnswersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { answers } = request.body

    const updateManyAnswersUseCase = container.resolve(UpdateManyUseCase)
    
    await updateManyAnswersUseCase.execute(answers)

    return response.status(200).send()
  }
}

export { UpdateManyAnswersController };
