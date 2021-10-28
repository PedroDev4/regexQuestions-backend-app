import { inject, injectable } from "tsyringe";
import { ICreateUserAnswersDTO } from "../../../DTOs/ICreateUserAnswersDTO";
import { Question } from "../../../entities/Question";
import { User } from "../../../entities/User";
import { UserAnswer } from "../../../entities/UserAnswer";
import { IQuestionsRepository } from "../../../repositories/IQuestionsRepository";
import { IUsersAnswersRepository } from "../../../repositories/IUsersAnswersRepository";
import { IUsersRepository } from "../../../repositories/IUsersRepository";

@injectable()
class CreateUserAnswerUseCase {

    constructor(
        @inject('UsersAnswersRepository')
        private usersAnswersRepository: IUsersAnswersRepository,
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ user_id, userAnswer, question_id }: ICreateUserAnswersDTO): Promise<UserAnswer> {
        const existentUserAnswer: UserAnswer = await this.usersAnswersRepository.findOneByQuestionId(question_id);
        const questionExists: Question = await this.questionsRepository.findById(question_id);
        const userExists: User = await this.usersRepository.findById(user_id);

        let updatedUserScore: number = 0;

        if (!this.VerifyParameters({ user_id, userAnswer, question_id })) {
            throw new Error('Invalid required parameters.');
        }

        if (existentUserAnswer || !questionExists) {
            throw new Error('This user has already answered this question id or question does not exists');
        }

        if (!userExists) {
            throw new Error('User does not exists');
        }

        const createdUserAnswer = await this.usersAnswersRepository.create({
            user_id,
            userAnswer,
            question_id
        });

        const questionsPush: string[] = [question_id];

        if (questionExists.correctAnswer === userAnswer) {
            updatedUserScore++;
        }

        await this.usersRepository.update({
            id: userExists.id,
            answeredQuestions: questionsPush,
            name: userExists.name,
            email: userExists.email,
            score: updatedUserScore
        });

        return createdUserAnswer;
    }

    private VerifyParameters({ user_id, userAnswer, question_id }: ICreateUserAnswersDTO): boolean {
        if (!user_id || !userAnswer || !question_id) {
            return false;
        }

        return true
    }

}

export { CreateUserAnswerUseCase };