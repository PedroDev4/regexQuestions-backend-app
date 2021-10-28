import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserAnswerUseCase } from "./UpdateUserAnswerUseCase";


class UpdateUserAnswerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { user_id, question_id, userAnswer } = request.body;

        const updateUserAnswerUseCase = container.resolve(UpdateUserAnswerUseCase);

        await updateUserAnswerUseCase.execute({
            id,
            question_id,
            userAnswer,
            user_id
        });

        return response.status(200).send();
    }
}

export { UpdateUserAnswerController };