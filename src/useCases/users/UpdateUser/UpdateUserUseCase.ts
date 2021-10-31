import { inject, injectable } from "tsyringe";
import { IUpdateUserDTO } from "../../../DTOs/users/IUpdateUserDTO";
import { IUserSchema } from "../../../entities/User";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ id, name, email, score, answeredQuestions }: IUpdateUserDTO): Promise<IUserSchema> {
        const userExists = await this.usersRepository.findById(id);

        if (!userExists) {
            throw new AppError(`User ${email} not found`);
        }

        const user = await this.usersRepository.update({ id, name, email, score, answeredQuestions });
        return user
    }

}

export { UpdateUserUseCase };