import { inject, injectable } from "tsyringe";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";


@injectable()
class DeleteUserAnswerUseCase {
    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository
    ) { }

    async execute(id: string): Promise<void> {

        if (!id) {
            throw new Error('Invalid identifier provided');
        }

        const userAnswer = await this.usersAnswersRepository.findById(id);

        if (!userAnswer) {
            throw new Error('UserAnswer does not exists');
        }

        await this.usersAnswersRepository.delete(id);
    }

}

export { DeleteUserAnswerUseCase };