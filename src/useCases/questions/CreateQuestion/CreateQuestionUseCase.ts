import { inject, injectable } from "tsyringe";
import { ICreateQuestionsDTO } from "../../../DTOs/ICreateQuestionsDTO";
import { Question } from "../../../entities/Question";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";


@injectable()
class CreateQuestionUseCase {

    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute({ title, type, correctAnswer, body }: ICreateQuestionsDTO): Promise<Question> {

        if (!title || !type || !correctAnswer || !body) {
            throw new AppError('Invalid required parameters');
        }
        const parsedCorrectAnswer = Buffer.from(correctAnswer, 'base64').toString().trim()

        const question = await this.questionsRepository.create({
            body,
            correctAnswer: parsedCorrectAnswer,
            title,
            type
        });

        return question;
    }

}

export { CreateQuestionUseCase };