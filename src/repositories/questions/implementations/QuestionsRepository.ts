import { PrismaClient } from ".prisma/client";
import { ICreateQuestionsDTO } from "../../../DTOs/questions/ICreateQuestionDTO";
import { IUpdateQuestionsDTO } from "../../../DTOs/questions/IUpdateQuestionDTO";
import { IQuestionSchema } from "../../../entities/IQuestion";
import { IQuestionsRepository } from "../IQuestionsRepository";


class QuestionsRepository implements IQuestionsRepository {
    constructor(private questionsRepository = new PrismaClient().question) {}

    async create({ title, type, correctAnswer, body }: ICreateQuestionsDTO): Promise<IQuestionSchema> {
        const question = await this.questionsRepository.create({
            data: {
                title,
                type,
                body,
                correctAnswer
            }
        });

        return question;
    }

    async update({ id, title, type, body, correctAnswer }: IUpdateQuestionsDTO): Promise<IQuestionSchema> {
        const question = await this.questionsRepository.update({
            data: {
                id, title, type, body, correctAnswer
            },
            where: { id }
        })

        return question
    }

    async findById(id: number): Promise<IQuestionSchema> {
        const question = await this.questionsRepository.findUnique({ where: { id } });
        return question
    }

    async findAll(): Promise<IQuestionSchema[]> {
        const questions = await this.questionsRepository.findMany()
        return questions
    }

    async delete(id: number): Promise<void> {
        await this.questionsRepository.delete({ where: { id } });
    }

}

export { QuestionsRepository };
