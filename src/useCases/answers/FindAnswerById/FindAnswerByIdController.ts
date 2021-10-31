import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAnswerByIdUseCase } from "./FindAnswerByIdUseCase";

class FindAnswerByIdController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findAnswerByIdUseCase = container.resolve(FindAnswerByIdUseCase);

        const userAnswer = await findAnswerByIdUseCase.execute(+id);

        return response.status(200).json(userAnswer);
    }

}

export { FindAnswerByIdController };