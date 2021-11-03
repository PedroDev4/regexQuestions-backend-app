import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetQuestionMatrixUseCase } from "./GetQuestionMatrixUseCase";

class GetQuestionMatrixController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getQuestionMatrixUseCase = container.resolve(GetQuestionMatrixUseCase);

    const questionMatrix = await getQuestionMatrixUseCase.execute();

    return response.status(200).json(questionMatrix);
  }
}

export { GetQuestionMatrixController };