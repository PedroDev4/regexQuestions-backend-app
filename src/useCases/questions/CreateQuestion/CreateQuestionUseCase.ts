import { inject, injectable } from "tsyringe";
import { ICreateQuestionsDTO } from "../../../DTOs/ICreateQuestionsDTO";
import { Question } from "../../../entities/Question";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";


@injectable()
class CreateQuestionUseCase {

    constructor(
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository
    ) { }

    async execute({ title, type, correctAnswer, body }: ICreateQuestionsDTO): Promise<Question> {

        if (!title || !type || !correctAnswer || !body) {
            throw new Error('Invalid required parameters');
        }

        const question = await this.questionsRepository.create({
            body,
            correctAnswer,
            title,
            type
        });

        return question;
    }

}

export { CreateQuestionUseCase };