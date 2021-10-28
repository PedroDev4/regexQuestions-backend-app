import { inject, injectable } from "tsyringe";
import { UserAnswer } from "../../../entities/UserAnswer";
import { AppError } from "../../../Errors/AppError";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";

@injectable()
class FindUserAnswersByQuestionUseCase {

    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository
    ) { }

    async execute(question_id: string): Promise<UserAnswer> {
        if (!question_id) {
            throw new AppError("Invalid identifier provided");
        }

        const userAnswer = await this.usersAnswersRepository.findOneByQuestionId(question_id);

        if (!userAnswer) {
            throw new AppError('UserAnswer does not exists');
        }

        return userAnswer;
    }

}

export { FindUserAnswersByQuestionUseCase };