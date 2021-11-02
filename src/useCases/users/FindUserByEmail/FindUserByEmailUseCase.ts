import { injectable, inject } from "tsyringe";
import { IUserSchema } from "../../../entities/IUser";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class FindUserByEmailUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(email: string): Promise<IUserSchema> {

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