import { inject, injectable } from "tsyringe";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";


@injectable()
class DeleteQuestionUseCase {

    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute(id: number): Promise<void> {

        const question = await this.questionsRepository.findById(id);

        if (!id || !question) {
            throw new AppError('Invalid identifier provided or question does not exists');
        }

        await this.questionsRepository.delete(id);
    }

}

export { DeleteQuestionUseCase };