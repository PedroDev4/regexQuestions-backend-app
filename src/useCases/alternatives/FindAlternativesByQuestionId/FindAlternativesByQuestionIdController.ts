import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAlternativesByQuestionIdUseCase } from "./FindAlternativesByQuestionIdUseCase";

class FindAlternativesByQuestionIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { questionId } = request.params

    const findAlternativesByQuestionIdUseCase = container.resolve(FindAlternativesByQuestionIdUseCase)

    const alternatives = await findAlternativesByQuestionIdUseCase.execute(+questionId)

    return response.json(alternatives)
  }
}

export { FindAlternativesByQuestionIdController }