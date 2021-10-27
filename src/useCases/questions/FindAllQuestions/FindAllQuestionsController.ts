import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllQuestionsUseCase } from "./FindAllQuestionsUseCase";

class FindAllQuestionsController {

    async handle(request: Request, response: Response): Promise<Response> {
        const findAllQuestionsUseCase = container.resolve(FindAllQuestionsUseCase);

        const questions = await findAllQuestionsUseCase.execute();

        return response.status(200).json(questions);
    }

}

export { FindAllQuestionsController };