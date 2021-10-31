import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAnswersByQuestionUseCase } from "./FindAnswersByQuestionUseCase";


class FindAnswersByQuestionController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { questionId } = request.params;

        const findAnswersByQuestionUseCase = container.resolve(FindAnswersByQuestionUseCase);

        const userAnswer = await findAnswersByQuestionUseCase.execute(+questionId);

        return response.status(200).json(userAnswer);
    }

}

export { FindAnswersByQuestionController };