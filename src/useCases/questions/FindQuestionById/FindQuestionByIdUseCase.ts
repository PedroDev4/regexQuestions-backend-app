import { inject, injectable } from "tsyringe";
import { IQuestionSchema } from "../../../entities/Question";
import { AppError } from "../../../Errors/AppError";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";

@injectable()
class FindQuestionByIdUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute(id: number): Promise<IQuestionSchema> {
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
