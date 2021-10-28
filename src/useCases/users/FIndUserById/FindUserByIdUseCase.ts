import { injectable, inject } from "tsyringe";
import { User } from "../../../entities/User";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class FindUserByIdUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id: string): Promise<User> {

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