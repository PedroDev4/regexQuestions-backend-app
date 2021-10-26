import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../../DTOs/IUpdateUserDTO";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ id, name, email, score, answeredQuestions }: IUpdateUserDTO): Promise<void> {

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error(`User ${id} not found`);
        }

        await this.usersRepository.update({ id, name, email, score, answeredQuestions });
    }

}

export { UpdateUserUseCase };