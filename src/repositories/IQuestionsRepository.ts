import { ICreateQuestionsDTO } from "../DTOs/ICreateQuestionsDTO";
import { IUpdateQuestionsDTO } from "../DTOs/IUpdateQuestionsDTO";
import { Question } from "../entities/Question";

interface IQuestionsRepository {
    create({ title, type, correctAnswer, body }: ICreateQuestionsDTO): Promise<Question>;
    update({ id, title, type, body, correctAnswer }: IUpdateQuestionsDTO): Promise<void>;
    findById(id: string): Promise<Question>;
    findAll(): Promise<Question[]>
    delete(id: string): Promise<void>;
}

export { IQuestionsRepository };