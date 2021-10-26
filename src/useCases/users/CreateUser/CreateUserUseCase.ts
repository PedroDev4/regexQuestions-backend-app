import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../../DTOs/ICreateUserDTO";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, email, answeredQuestions = [], score = 0 }: ICreateUserDTO): Promise<User> {

        const userExists = await this.usersRepository.findByEmail(email);

        if (!name || !email || !answeredQuestions) {
            throw new Error("Invalid required parameters!");
        }

        if (userExists) {
            throw new Error(`User "${userExists.name}-${userExists.email}" already exists`);
        }

        const user = await this.usersRepository.create({
            name,
            email,
            answeredQuestions,
            score
        });

        return user;

    }

}

export { CreateUserUseCase }