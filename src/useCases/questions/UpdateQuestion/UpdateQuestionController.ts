import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";


class UpdateQuestionController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { title, type, correctAnswer, body } = request.body;
        const { id } = request.params;

        const updateQuestionUseCase = container.resolve(UpdateQuestionUseCase);


        await updateQuestionUseCase.execute({
            id,
            body,
            correctAnswer,
            title,
            type
        });

        return response.status(200).send();
    }

}

export { UpdateQuestionController };