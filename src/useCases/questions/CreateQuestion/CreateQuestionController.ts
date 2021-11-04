import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateQuestionUseCase } from "./CreateQuestionUseCase";


class CreateQuestionController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { title, correctAnswer, body, type, alternatives } = request.body;

        const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

        const question = await createQuestionUseCase.execute({
            title, type, correctAnswer, body, alternatives
        });

        return response.status(201).json(question);
    }

}

export { CreateQuestionController };