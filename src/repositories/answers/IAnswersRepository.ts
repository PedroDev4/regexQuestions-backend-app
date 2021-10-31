import { ICreateAnswerDTO } from "../../DTOs/answers/ICreateAnswerDTO";
import { IUpdateAnswerDTO } from "../../DTOs/answers/IUpdateAnswerDTO";
import { IAnswerSchema } from "../../entities/Answer";

interface IAnswersRepository {
    create({ questionId,
        userAnswer, userId }: ICreateAnswerDTO): Promise<IAnswerSchema>;
    update({ id, userId, userAnswer, questionId }: IUpdateAnswerDTO): Promise<IAnswerSchema>
    findById(id: number): Promise<IAnswerSchema>;
    findByQuestionId(questionId: number): Promise<IAnswerSchema[]>;
    findByUserId(userId: number): Promise<IAnswerSchema[]>;
    delete(id: number): Promise<void>
}

export { IAnswersRepository };