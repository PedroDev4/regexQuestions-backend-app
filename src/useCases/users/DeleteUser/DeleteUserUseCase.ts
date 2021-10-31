import { injectable, inject } from "tsyringe";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(id: number): Promise<void> {
        if (!id) {
            throw new AppError("Invalid identifier");
        }

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User already does not exists.")
        }

        await this.usersRepository.delete(id);
    }

}

export { DeleteUserUseCase };