import { inject, injectable } from "tsyringe";
import { AppError } from "../../../Errors/AppError";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";


@injectable()
class DeleteAnswerUseCase {
    constructor(
        @inject('AnswersRepository')
        private answersRepository: IAnswersRepository
    ) {}

    async execute(id: number): Promise<void> {
        if (!id) {
            throw new AppError('Invalid identifier provided');
        }

        const answer = await this.answersRepository.findById(id);

        if (!answer) {
            throw new AppError('Answer does not exists');
        }

        await this.answersRepository.delete(id);
    }
}

export { DeleteAnswerUseCase };