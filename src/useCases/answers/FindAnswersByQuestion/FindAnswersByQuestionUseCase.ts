import { inject, injectable } from "tsyringe";
import { IAnswerSchema } from "../../../entities/Answer";
import { AppError } from "../../../Errors/AppError";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";

@injectable()
class FindAnswersByQuestionUseCase {

    constructor(
        @inject('AnswersRepository')
        private answersRepository: IAnswersRepository
    ) {}

    async execute(questionId: number): Promise<IAnswerSchema[]> {
        if (!questionId) {
            throw new AppError("Invalid identifier provided");
        }

        const userAnswer = await this.answersRepository.findByQuestionId(questionId);

        if (userAnswer.length < 0) {
            throw new AppError('UserAnswer does not exists');
        }

        return userAnswer;
    }

}

export { FindAnswersByQuestionUseCase };