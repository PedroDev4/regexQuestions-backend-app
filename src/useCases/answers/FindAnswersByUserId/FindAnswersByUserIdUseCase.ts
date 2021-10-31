import { inject, injectable } from "tsyringe";
import { IAnswerSchema } from "../../../entities/Answer";
import { AppError } from "../../../Errors/AppError";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";

@injectable()
class FindAnswersByUserIdUseCase {
    constructor(
        @inject('AnswersRepository')
        private answersRepository: IAnswersRepository
    ) {}

    async execute(userId: number): Promise<IAnswerSchema[]> {
        if (!userId) {
            throw new AppError('Invalid identifier provided');
        }

        const userAnswers = await this.answersRepository.findByUserId(userId);

        if (userAnswers.length === 0) {
            throw new AppError('There is no existent answers for user: ' + userId);
        }

        return userAnswers;
    }
}

export { FindAnswersByUserIdUseCase };