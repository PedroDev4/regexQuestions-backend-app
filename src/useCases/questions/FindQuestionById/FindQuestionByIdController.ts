import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindQuestionByIdUseCase } from "./FindQuestionByIdUseCase";

class FindQuestionByIdController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findQuestionByIdUseCase = container.resolve(FindQuestionByIdUseCase);

        const question = await findQuestionByIdUseCase.execute(id);

        return response.status(200).json(question);
    }

}

export { FindQuestionByIdController }