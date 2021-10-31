import { inject, injectable } from "tsyringe";
import { IUpdateQuestionsDTO } from "../../../DTOs/questions/IUpdateQuestionDTO";
import { IQuestionSchema } from "../../../entities/Question";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";


@injectable()
class UpdateQuestionUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute({ id, title, type, correctAnswer, body }: IUpdateQuestionsDTO): Promise<IQuestionSchema> {

        if (!id) {
            throw new AppError('Invalid required identifier');
        }

        const questionExists = await this.questionsRepository.findById(id);

        if (!questionExists) {
            throw new AppError('Question does not exists');
        }

        const question = await this.questionsRepository.update({
            id, body, correctAnswer, title, type
        });

        return question
    }
}

export { UpdateQuestionUseCase };