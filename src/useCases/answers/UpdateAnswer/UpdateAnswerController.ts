import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateAnswerUseCase } from "./UpdateAnswerUseCase";


class UpdateAnswerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { userId, questionId, userAnswer } = request.body;

        const updateAnswerUseCase = container.resolve(UpdateAnswerUseCase);

        const answer = await updateAnswerUseCase.execute({
            id: +id,
            questionId,
            userAnswer,
            userId
        });

        return response.status(200).json(answer);
    }
}

export { UpdateAnswerController };