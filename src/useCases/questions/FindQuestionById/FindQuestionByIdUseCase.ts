import { inject, injectable } from "tsyringe";
import { Question } from "../../../entities/Question";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";

@injectable()
class FindQuestionByIdUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute(id: string): Promise<Question> {
        if (!id) {
            throw new AppError('Invalid provided identifier');
        }

        const question = await this.questionsRepository.findById(id);

        if (!question) {
            throw new AppError('Question does not exists');
        }

        return question;
    }
}

export { FindQuestionByIdUseCase };