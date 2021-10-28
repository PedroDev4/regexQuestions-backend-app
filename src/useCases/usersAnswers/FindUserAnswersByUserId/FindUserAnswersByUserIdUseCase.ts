import { inject, injectable } from "tsyringe";
import { UserAnswer } from "../../../entities/UserAnswer";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";

@injectable()
class FindUserAnswersByUserIdUseCase {
    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository
    ) { }

    async execute(user_id: string): Promise<UserAnswer[]> {
        if (!user_id) {
            throw new Error('Invalid identifier provided');
        }

        const userAnswers = await this.usersAnswersRepository.findByUserId(user_id);

        if (userAnswers.length === 0) {
            throw new Error('There is no existent answers for user: ' + user_id);
        }

        return userAnswers;
    }
}

export { FindUserAnswersByUserIdUseCase };