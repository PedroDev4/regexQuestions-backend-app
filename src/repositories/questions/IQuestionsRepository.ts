import { ICreateQuestionsDTO } from "../../DTOs/questions/ICreateQuestionDTO";
import { IUpdateQuestionsDTO } from "../../DTOs/questions/IUpdateQuestionDTO";
import { IQuestionSchema } from "../../entities/IQuestion";

interface IQuestionsRepository {
    create({ title, type, correctAnswer, body }: ICreateQuestionsDTO): Promise<IQuestionSchema>;
    update({ id, title, type, body, correctAnswer }: IUpdateQuestionsDTO): Promise<IQuestionSchema>;
    findById(id: number): Promise<IQuestionSchema>;
    findAll(): Promise<IQuestionSchema[]>
    delete(id: number): Promise<void>;
}

export { IQuestionsRepository };