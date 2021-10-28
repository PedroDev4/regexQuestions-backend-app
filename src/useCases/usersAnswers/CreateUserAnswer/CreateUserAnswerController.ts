import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserAnswerUseCase } from "./CreateUserAnswerUseCase";


class CreateUserAnswerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { user_id, userAnswer, question_id } = request.body;

        const createUserAnswerUseCase = container.resolve(CreateUserAnswerUseCase);

        const createdUserAnswer = await createUserAnswerUseCase.execute({
            user_id,
            userAnswer,
            question_id
        });

        return response.status(201).json(createdUserAnswer);
    }

}

export { CreateUserAnswerController };