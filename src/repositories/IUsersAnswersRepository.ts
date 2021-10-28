import { ICreateUserAnswersDTO } from "../DTOs/ICreateUserAnswersDTO";
import { IUpdateUserAnswersDTO } from "../DTOs/IUpdateUserAnswerDTO";
import { UserAnswer } from "../entities/UserAnswer";

interface IUsersAnswersRepository {
    create({ user_id, userAnswer, question_id }: ICreateUserAnswersDTO): Promise<UserAnswer>;
    update({ id, user_id, userAnswer, question_id }: IUpdateUserAnswersDTO): Promise<void>
    findById(id: string): Promise<UserAnswer>;
    findOneByQuestionId(question_id: string): Promise<UserAnswer>;
    findByUserId(user_id: string): Promise<UserAnswer[]>;
    delete(id: string): Promise<void>
}

export { IUsersAnswersRepository };