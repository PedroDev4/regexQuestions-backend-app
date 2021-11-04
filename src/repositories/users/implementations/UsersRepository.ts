import { PrismaClient } from ".prisma/client";
import { ICreateUserDTO } from "../../../DTOs/users/ICreateUserDTO";
import { IUpdateUserDTO } from "../../../DTOs/users/IUpdateUserDTO";
import { IUserSchema } from "../../../entities/IUser";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
    constructor(private usersRepository = new PrismaClient().user) {}

    async create({ name, email, answeredQuestions, score }: ICreateUserDTO): Promise<IUserSchema> {
        const user = this.usersRepository.create({
            data: {
                name,
                email,
                answeredQuestions,
                score
            }
        });

        return user;
    }

    async update({ id, name, email, answeredQuestions, score }: IUpdateUserDTO): Promise<IUserSchema> {
        const user = await this.usersRepository.update({
            data: { answeredQuestions, email, id, name, score },
            where: {
                id
            }
        });

        return user
    }

    async updateScore(score: number, id: number): Promise<IUserSchema> {
        const userById = await this.findById(id)

        const user = await this.usersRepository.update({
            where: { id }, data: { score: userById.score + score }
        })

        return user
    }

    async findById(id: number): Promise<IUserSchema> {
        const user = await this.usersRepository.findUnique({ where: { id } });
        return user;
    }

    async findByEmail(email: string): Promise<IUserSchema> {
        const user = await this.usersRepository.findUnique({ where: { email } });
        return user;
    }

    async findAnsweredQuestionsByUser(id: number): Promise<number[]> {
        const user = await this.usersRepository.findUnique({ where: { id } });

        return user.answeredQuestions;
    }

    async delete(id: number): Promise<void> {
        await this.usersRepository.delete({ where: { id } });
    }
}

export { UsersRepository };
