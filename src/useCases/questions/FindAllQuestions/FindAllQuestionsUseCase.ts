import { inject, injectable } from "tsyringe";
import { IQuestionSchema } from "../../../entities/IQuestion";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";

@injectable()
class FindAllQuestionsUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) {}

    async execute(): Promise<IQuestionSchema[]> {
        return await this.questionsRepository.findAll();
    }
}

export { FindAllQuestionsUseCase };
