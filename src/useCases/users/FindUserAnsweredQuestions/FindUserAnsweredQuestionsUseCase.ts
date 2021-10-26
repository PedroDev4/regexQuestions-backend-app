import { injectable, inject } from "tsyringe";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class FindUserAnsweredQuestionsUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id?: string, email?: string): Promise<string[]> {

        if (!id || !email) {
            throw new Error("Invalid email or identifier provided");
        }

        const user: User = id ? await this.usersRepository.findById(id) : await this.usersRepository.findByEmail(email)

        if (!user) {
            throw new Error("User does not exists.")
        }

        return user.answeredQuestions;
    }

}

export { FindUserAnsweredQuestionsUseCase };