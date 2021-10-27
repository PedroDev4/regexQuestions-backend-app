import { inject, injectable } from "tsyringe";
import { Question } from "../../../entities/Question";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";

@injectable()
class FindAllQuestionsUseCase {
    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute(): Promise<Question[]> {
        return await this.questionsRepository.findAll();
    }
}

export { FindAllQuestionsUseCase };