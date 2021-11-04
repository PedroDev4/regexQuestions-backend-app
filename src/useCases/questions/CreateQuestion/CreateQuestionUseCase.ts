import { inject, injectable } from "tsyringe";
import { ICreateQuestionsDTO } from "../../../DTOs/questions/ICreateQuestionDTO";
import { IQuestionSchema } from "../../../entities/IQuestion";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";


@injectable()
class CreateQuestionUseCase {

    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute({ title, type, correctAnswer, body, alternatives }: ICreateQuestionsDTO): Promise<IQuestionSchema> {
        if (!title || !type || !correctAnswer || !body) {
            throw new AppError('Invalid required parameters');
        }
        
        const question = await this.questionsRepository.create({
            body,
            correctAnswer,
            title,
            type,
            alternatives
        });

        return question;
    }

}

export { CreateQuestionUseCase };