import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";


class FindUserByEmailController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

        const user = await findUserByEmailUseCase.execute(id);

        return response.status(200).json(user)
    }

}

export { FindUserByEmailController };