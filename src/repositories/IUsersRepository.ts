import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { IUpdateUserDTO } from "../DTOs/IUpdateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
    create({ name, email, answeredQuestions, score }: ICreateUserDTO): Promise<User>
    update({ id, name, email, answeredQuestions, score }: IUpdateUserDTO): Promise<void>
    findById(id: string): Promise<User>
    findByEmail(email: string): Promise<User>
    findAnsweredQuestionsByUser(id: string): Promise<string[]>
    delete(id: string): Promise<void>
}

export { IUsersRepository };