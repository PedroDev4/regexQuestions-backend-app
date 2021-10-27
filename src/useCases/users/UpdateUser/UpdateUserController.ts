import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, score, answeredQuestions } = request.body;
        const { id } = request.params;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        await updateUserUseCase.execute({ id, name, email, score, answeredQuestions });

        return response.status(200).send();
    }

}

export { UpdateUserController };