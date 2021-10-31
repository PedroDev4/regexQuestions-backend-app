import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAnswersByUserIdUseCase } from "./FindAnswersByUserIdUseCase";


class FindAnswersByUserIdController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { userId } = request.params;

        const findAnswersByUserIdUseCase = container.resolve(FindAnswersByUserIdUseCase);

        const userAnswers = await findAnswersByUserIdUseCase.execute(+userId);

        return response.status(200).json(userAnswers);
    }

}

export { FindAnswersByUserIdController };