import { ICreateUserDTO } from "../../DTOs/users/ICreateUserDTO";
import { IUpdateUserDTO } from "../../DTOs/users/IUpdateUserDTO";
import { IUserSchema } from "../../entities/IUser";

interface IUsersRepository {
    create({ name, email, answeredQuestions, score }: ICreateUserDTO): Promise<IUserSchema>
    update({ id, name, email, answeredQuestions, score }: IUpdateUserDTO): Promise<IUserSchema>
    findById(id: number): Promise<IUserSchema>
    findByEmail(email: string): Promise<IUserSchema>
    findAnsweredQuestionsByUser(id: number): Promise<number[]>
    delete(id: number): Promise<void>
}

export { IUsersRepository };