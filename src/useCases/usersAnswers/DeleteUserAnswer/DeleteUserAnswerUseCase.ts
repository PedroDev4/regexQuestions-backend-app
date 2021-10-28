import { inject, injectable } from "tsyringe";
import { AppError } from "../../../Errors/AppError";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";


@injectable()
class DeleteUserAnswerUseCase {
    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository
    ) { }

    async execute(id: string): Promise<void> {

        if (!id) {
            throw new AppError('Invalid identifier provided');
        }

        const userAnswer = await this.usersAnswersRepository.findById(id);

        if (!userAnswer) {
            throw new AppError('UserAnswer does not exists');
        }

        await this.usersAnswersRepository.delete(id);
    }

}

export { DeleteUserAnswerUseCase };