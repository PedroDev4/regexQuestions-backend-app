import { inject, injectable } from "tsyringe";
import { UserAnswer } from "../../../entities/UserAnswer";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";


@injectable()
class FindUserAnswerByIdUseCase {

    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository
    ) { }

    async execute(id: string): Promise<UserAnswer> {

        if (!id) {
            throw new Error('Invalid identifier provided');
        }

        const userAnswer = await this.usersAnswersRepository.findById(id);

        if (!userAnswer) {
            throw new Error('UserAnswer does not exists');
        }

        return userAnswer;
    }

}

export { FindUserAnswerByIdUseCase };