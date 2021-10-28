import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserAnswerByIdUseCase } from "./FindUserAnswerByIdUseCase";

class FindByUserAnswerByIdController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findUserAnswerByIdUseCase = container.resolve(FindUserAnswerByIdUseCase);

        const userAnswer = await findUserAnswerByIdUseCase.execute(id);

        return response.status(200).json(userAnswer);
    }

}

export { FindByUserAnswerByIdController };