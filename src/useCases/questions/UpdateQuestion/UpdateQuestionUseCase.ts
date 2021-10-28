import { inject, injectable } from "tsyringe";
import { IUpdateQuestionsDTO } from "../../../DTOs/IUpdateQuestionsDTO";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";


@injectable()
class UpdateQuestionUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute({ id, title, type, correctAnswer, body }: IUpdateQuestionsDTO): Promise<void> {

        if (!id) {
            throw new AppError('Invalid required identifier');
        }

        const question = await this.questionsRepository.findById(id);

        if (!question) {
            throw new AppError('Question does not exists');
        }

        await this.questionsRepository.update({
            id, body, correctAnswer, title, type
        });
    }
}

export { UpdateQuestionUseCase };