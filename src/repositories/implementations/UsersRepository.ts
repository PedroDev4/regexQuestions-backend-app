import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../DTOs/ICreateUserDTO";
import { IUpdateUserDTO } from "../../DTOs/IUpdateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";


class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, answeredQuestions, score }: ICreateUserDTO): Promise<User> {
        const user = this.repository.create({
            name,
            email,
            answeredQuestions,
            score
        });

        await this.repository.save(user);

        return user;
    }

    async update({ id, name, email, answeredQuestions, score }: IUpdateUserDTO): Promise<void> {
        await this.repository.update(id, {
            name,
            email,
            answeredQuestions,
            score,
        });
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ id });
        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });
        return user;
    }

    async findAnsweredQuestionsByUser(id: string): Promise<string[]> {
        const user = await this.repository.findOne({ id });
        return user.answeredQuestions;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { UsersRepository };