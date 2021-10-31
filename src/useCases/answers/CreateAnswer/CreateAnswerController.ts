import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAnswerUseCase } from "./CreateAnswerUseCase";

class CreateAnswerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { userId, userAnswer, questionId } = request.body;

        const createAnswerUseCase = container.resolve(CreateAnswerUseCase);

        const createdUserAnswer = await createAnswerUseCase.execute({
            userId,
            userAnswer,
            questionId
        });

        return response.status(201).json(createdUserAnswer);
    }

}

export { CreateAnswerController };