import { PrismaClient } from ".prisma/client";
import { ICreateAnswerDTO } from "../../../DTOs/answers/ICreateAnswerDTO";
import { IUpdateAnswerDTO } from "../../../DTOs/answers/IUpdateAnswerDTO";
import { IAnswerSchema } from "../../../entities/IAnswer";
import { IAnswersRepository } from "../IAnswersRepository";


class AnswersRepository implements IAnswersRepository {
    constructor(private answersRepository = new PrismaClient().answer) {}

    async create({ questionId, userAnswer, userId, }: ICreateAnswerDTO): Promise<IAnswerSchema> {
        const answer = await this.answersRepository.create({
            data: { userAnswer, questionId, userId }
        });

        return answer;
    }

    async createMany(answers: ICreateAnswerDTO[]): Promise<void> {
        await this.answersRepository.createMany({ data: answers })
    }

    async update({ id, questionId, userAnswer, userId }: IUpdateAnswerDTO): Promise<IAnswerSchema> {
        const answer = await this.answersRepository.update({
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

    async updateMany(answers: IUpdateAnswerDTO[]): Promise<void> {
        await Promise.all(answers.map(async answer => {
            await this.answersRepository.update({
                data: answer,
                where: {
                    id: answer.id
                }
            })
        }))
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
