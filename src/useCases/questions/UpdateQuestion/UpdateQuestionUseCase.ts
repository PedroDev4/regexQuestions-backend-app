import { inject, injectable } from "tsyringe";
import { IUpdateQuestionsDTO } from "../../../DTOs/IUpdateQuestionsDTO";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";


@injectable()
class UpdateQuestionUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute({ id, title, type, correctAnswer, body }: IUpdateQuestionsDTO): Promise<void> {

        if (!id) {
            throw new Error('Invalid required identifier');
        }

        const question = await this.questionsRepository.findById(id);

        if (!question) {
            throw new Error('Question does not exists');
        }

        await this.questionsRepository.update({
            id, body, correctAnswer, title, type
        });
    }
}

export { UpdateQuestionUseCase };