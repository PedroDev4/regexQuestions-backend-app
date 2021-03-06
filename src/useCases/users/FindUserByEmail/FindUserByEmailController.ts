import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserByEmailUseCase } from "./FindUserByEmailUseCase";


class FindUserByEmailController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { email } = request.params;

        const findUserByEmailUseCase = container.resolve(FindUserByEmailUseCase);

        const user = await findUserByEmailUseCase.execute(email);

        return response.status(200).json(user)
    }

}

export { FindUserByEmailController };