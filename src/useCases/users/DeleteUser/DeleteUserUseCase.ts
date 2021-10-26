import { injectable, inject } from "tsyringe";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class DeleteUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id: string): Promise<void> {

        if (!id) {
            throw new Error("Invalid identifier");
        }

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error("User already does not exists.")
        }

        await this.usersRepository.delete(id);
    }

}

export { DeleteUserUseCase };