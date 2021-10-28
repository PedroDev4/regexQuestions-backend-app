import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserAnswersByUserIdUseCase } from "./FindUserAnswersByUserIdUseCase";


class FindUserAnswersByUserIdController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { user_id } = request.params;

        const findUserAnswersByUserIdUseCase = container.resolve(FindUserAnswersByUserIdUseCase);

        const userAnswers = await findUserAnswersByUserIdUseCase.execute(user_id);

        return response.status(200).json(userAnswers);
    }

}

export { FindUserAnswersByUserIdController };