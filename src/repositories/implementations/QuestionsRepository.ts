import { getRepository, Repository } from "typeorm";
import { ICreateQuestionsDTO } from "../../DTOs/ICreateQuestionsDTO";
import { IUpdateQuestionsDTO } from "../../DTOs/IUpdateQuestionsDTO";
import { Question } from "../../entities/Question";
import { IQuestionsRepository } from "../IQuestionsRepository";


class QuestionsRepository implements IQuestionsRepository {

    private repository: Repository<Question>

    constructor() {
        this.repository = getRepository(Question);
    }

    async create({ title, type, correctAnswer, body }: ICreateQuestionsDTO): Promise<Question> {
        const question = this.repository.create({
            title,
            type,
            body,
            correctAnswer
        });

        await this.repository.save(question);

        return question;
    }

    async update({ id, title, type, body, correctAnswer }: IUpdateQuestionsDTO): Promise<void> {
        await this.repository.update(id, {
            title,
            type,
            body,
            correctAnswer
        });
    }

    async findById(id: string): Promise<Question> {
        return await this.repository.findOne({ id });
    }

    async findAll(): Promise<Question[]> {
        return await this.repository.find();
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete({ id });
    }

}

export { QuestionsRepository };