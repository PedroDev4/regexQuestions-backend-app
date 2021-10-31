import { PrismaClient } from ".prisma/client";
import { ICreateAnswerDTO } from "../../../DTOs/answers/ICreateAnswerDTO";
import { IUpdateAnswerDTO } from "../../../DTOs/answers/IUpdateAnswerDTO";
import { IAnswerSchema } from "../../../entities/Answer";
import { IAnswersRepository } from "../IAnswersRepository";


class AnswersRepository implements IAnswersRepository {
    constructor(private answersRepository = new PrismaClient().answer) {}

    async create({ questionId, userAnswer, userId, }: ICreateAnswerDTO): Promise<IAnswerSchema> {
        const answer = this.answersRepository.create({
            data: { userAnswer, questionId, userId }
        });

        return answer;
    }

    async update({ id, questionId, userAnswer, userId }: IUpdateAnswerDTO): Promise<IAnswerSchema> {
        const answer = this.answersRepository.update({
            data: {
                id,
                questionId,
                userAnswer,
                userId
            },
            where: {
                id
            }
        });

        return answer;
    }

    async findById(id: number): Promise<IAnswerSchema> {
        const answer = await this.answersRepository.findUnique({ where: { id } });
        return answer
    }

    async findByUserId(userId: number): Promise<IAnswerSchema[]> {
        const answer = await this.answersRepository.findMany({
            where: { userId: userId }
        })

        return answer
    }

    async findByQuestionId(questionId: number): Promise<IAnswerSchema[]> {
        const answer = await this.answersRepository.findMany({ where: { questionId } })

        return answer;
    }

    async delete(id: number): Promise<void> {
        await this.answersRepository.delete({ where: { id } });
    }
}

export { AnswersRepository };
