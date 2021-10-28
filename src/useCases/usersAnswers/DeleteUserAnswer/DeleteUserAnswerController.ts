import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteUserAnswerUseCase } from "./DeleteUserAnswerUseCase";


class DeleteUserAnswerController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteUserAnswerUseCase = container.resolve(DeleteUserAnswerUseCase);

        await deleteUserAnswerUseCase.execute(id);

        return response.status(200).send();
    }

}

export { DeleteUserAnswerController };