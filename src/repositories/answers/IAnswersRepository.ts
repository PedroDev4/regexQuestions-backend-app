import { ICreateAnswerDTO } from "../../DTOs/answers/ICreateAnswerDTO";
import { IUpdateAnswerDTO } from "../../DTOs/answers/IUpdateAnswerDTO";
import { IAnswerSchema } from "../../entities/IAnswer";

interface IAnswersRepository {
    create({ questionId,
        userAnswer, userId }: ICreateAnswerDTO): Promise<IAnswerSchema>;
    createMany(answers: ICreateAnswerDTO[]): Promise<void>
    updateMany(answers: IUpdateAnswerDTO[]): Promise<void>
    update({ id, userId, userAnswer, questionId }: IUpdateAnswerDTO): Promise<IAnswerSchema>
    findById(id: number): Promise<IAnswerSchema>;
    findByQuestionId(questionId: number): Promise<IAnswerSchema[]>;
    findByUserId(userId: number): Promise<IAnswerSchema[]>;
    delete(id: number): Promise<void>
}

export { IAnswersRepository };