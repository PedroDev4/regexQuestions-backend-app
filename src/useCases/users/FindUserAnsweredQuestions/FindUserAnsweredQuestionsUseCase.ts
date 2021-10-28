import { injectable, inject } from "tsyringe";
import { AppError } from "../../../Errors/AppError";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class FindUserAnsweredQuestionsUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute(id?: string): Promise<string[]> {

        if (!id) {
            throw new AppError("Invalid identifier provided");
        }

        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new AppError("User does not exists.")
        }

        return user.answeredQuestions;
    }

}

export { FindUserAnsweredQuestionsUseCase };