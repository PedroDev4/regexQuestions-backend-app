import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserAnswersByQuestionUseCase } from "./FindUserAnswersByQuestionUseCase";


class FindUserAnswersByQuestionController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { questionId } = request.params;

        const findUserAnswersByQuestionUseCase = container.resolve(FindUserAnswersByQuestionUseCase);

        const userAnswer = await findUserAnswersByQuestionUseCase.execute(questionId);

        return response.status(200).json(userAnswer);
    }

}

export { FindUserAnswersByQuestionController };