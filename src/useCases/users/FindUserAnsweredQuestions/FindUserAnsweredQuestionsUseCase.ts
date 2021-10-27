import { injectable, inject } from "tsyringe";
import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class FindUserAnsweredQuestionsUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id?: string): Promise<string[]> {

        if (!id) {
            throw new Error("Invalid identifier provided");
        }

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error("User does not exists.")
        }

        return user.answeredQuestions;
    }

}

export { FindUserAnsweredQuestionsUseCase };