import { inject, injectable } from "tsyringe";
import { UserAnswer } from "../../../entities/UserAnswer";
import { AppError } from "../../../Errors/AppError";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";

@injectable()
class FindUserAnswerByIdUseCase {

    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository
    ) { }

    async execute(id: string): Promise<UserAnswer> {

        if (!id) {
            throw new AppError('Invalid identifier provided');
        }

        const userAnswer = await this.usersAnswersRepository.findById(id);

        if (!userAnswer) {
            throw new AppError('UserAnswer does not exists');
        }

        return userAnswer;
    }

}

export { FindUserAnswerByIdUseCase };