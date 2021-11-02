import { inject, injectable } from "tsyringe";
import { ICreateAnswerDTO } from "../../../DTOs/answers/ICreateAnswerDTO";
import { IAnswerSchema } from "../../../entities/IAnswer";
import { AppError } from "../../../Errors/AppError";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class CreateAnswerUseCase {
    constructor(
        @inject('AnswersRepository')
        private answerRepository: IAnswersRepository,
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ userId, userAnswer, questionId }: ICreateAnswerDTO): Promise<IAnswerSchema> {
        const existentUserAnswer = await this.answerRepository.findByQuestionId(questionId);
        const questionExists = await this.questionsRepository.findById(questionId);
        const userExists = await this.usersRepository.findById(userId);

        let updatedUserScore = 0;

        if (!this.VerifyParameters({ userId, userAnswer, questionId })) {
            throw new AppError('Invalid required parameters.');
        }

        if (existentUserAnswer.length > 0 || !questionExists) {
            throw new AppError('This user has already answered this question id or question does not exists');
        }

        if (!userExists) {
            throw new AppError('User does not exists');
        }

        const createdUserAnswer = await this.answerRepository.create({
            userId,
            userAnswer,
            questionId
        });

        const questionsPush = [questionId];

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

    private VerifyParameters({ userId, userAnswer, questionId }: ICreateAnswerDTO): boolean {
        if (!userId || !userAnswer || !questionId) {
            return false;
        }

        return true
    }

}

export { CreateAnswerUseCase };
