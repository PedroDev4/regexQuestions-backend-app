import { injectable, inject } from "tsyringe";
import { User } from "../../../entities/User";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class FindUserByEmailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(email: string): Promise<User> {

        if (!email) {
            throw new AppError("Invalid email provided");
        }

        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError("User does not exists.")
        }

        return user;
    }

}

export { FindUserByEmailUseCase };