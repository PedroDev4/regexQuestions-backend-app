import { inject, injectable } from "tsyringe";
import { IUpdateUserAnswersDTO } from "../../../DTOs/IUpdateUserAnswerDTO";
import { Question } from "../../../entities/Question";
import { User } from "../../../entities/User";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class UpdateUserAnswerUseCase {
    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository,
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ id, question_id, user_id, userAnswer }: IUpdateUserAnswersDTO): Promise<void> {
        const existentUserAnswer = await this.usersAnswersRepository.findById(id);
        const questionExists: Question = await this.questionsRepository.findById(question_id);
        const userExists: User = await this.usersRepository.findById(user_id);

        let updatedUserScore: number = 0;

        if (!id) {
            throw new Error("invalid required identifier provided");
        }

        if (!existentUserAnswer) {
            throw new Error("UserAnswer does not exists");
        }

        const questionsPush: string[] = [question_id];

        if (userAnswer != existentUserAnswer.userAnswer && userAnswer === questionExists.correctAnswer) {
            updatedUserScore++;

            await this.usersRepository.update({
                id: userExists.id,
                answeredQuestions: questionsPush,
                name: userExists.name,
                email: userExists.email,
                score: updatedUserScore
            });
        }

        await this.usersAnswersRepository.update({
            id,
            question_id,
            userAnswer,
            user_id
        });
    }

}

export { UpdateUserAnswerUseCase };