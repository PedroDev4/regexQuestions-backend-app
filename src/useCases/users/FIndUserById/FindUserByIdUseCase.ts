import { inject, injectable } from "tsyringe";
import { IUserSchema } from "../../../entities/IUser";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class FindUserByIdUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(id: number): Promise<IUserSchema> {
        console.log(id)
        if (!id) {
            throw new AppError("Invalid identifier");
        }

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User does not exists.")
        }

        return user;
    }

}

export { FindUserByIdUseCase };
