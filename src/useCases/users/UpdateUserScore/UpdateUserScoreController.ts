import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserScoreUseCase } from "./UpdateUserScoreUseCase";

class UpdateUserScoreController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { userId, score } = request.params

    const updateUserScoreUseCase = container.resolve(UpdateUserScoreUseCase)

    const user = await updateUserScoreUseCase.execute(+userId, +score)

    return response.json(user)

  }
}

export { UpdateUserScoreController }