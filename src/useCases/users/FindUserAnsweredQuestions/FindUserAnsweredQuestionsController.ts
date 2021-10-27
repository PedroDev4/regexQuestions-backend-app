import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserAnsweredQuestionsUseCase } from "./FindUserAnsweredQuestionsUseCase";


class FindUserAnsweredQuestionsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findUserAnsweredQuestionsUseCase = container.resolve(FindUserAnsweredQuestionsUseCase);

        const userAnsweredQuestions = await findUserAnsweredQuestionsUseCase.execute(id);

        return response.status(200).json(userAnsweredQuestions);
    }

}

export { FindUserAnsweredQuestionsController };