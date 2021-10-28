import { getRepository, Repository } from "typeorm";
import { ICreateUserAnswersDTO } from "../../DTOs/ICreateUserAnswersDTO";
import { IUpdateUserAnswersDTO } from "../../DTOs/IUpdateUserAnswerDTO";
import { UserAnswer } from "../../entities/UserAnswer";
import { IUsersAnswersRepository } from "../IUsersAnswersRepository";


class UsersAnswersRepository implements IUsersAnswersRepository {

    private repository: Repository<UserAnswer>;

    constructor() {
        this.repository = getRepository(UserAnswer);
    }

    async create({ user_id, userAnswer, question_id }: ICreateUserAnswersDTO): Promise<UserAnswer> {
        const user_answer = this.repository.create({
            user_id,
            userAnswer,
            question_id
        });

        await this.repository.save(user_answer);

        return user_answer;
    }

    async update({ id, user_id, userAnswer, question_id }: IUpdateUserAnswersDTO): Promise<void> {
        await this.repository.update(id, {
            user_id,
            userAnswer,
            question_id
        });
    }

    async findById(id: string): Promise<UserAnswer> {
        return await this.repository.findOne({ id });
    }

    async findByUserId(user_id: string): Promise<UserAnswer[]> {
        return await this.repository.find({
            where: { user_id }
        });
    }

    async findOneByQuestionId(question_id: string): Promise<UserAnswer> {
        const userAnswer = await this.repository.findOne({ question_id });
        return userAnswer;
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}

export { UsersAnswersRepository };