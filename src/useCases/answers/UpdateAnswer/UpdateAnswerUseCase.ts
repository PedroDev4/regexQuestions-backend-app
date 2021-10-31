import { inject, injectable } from "tsyringe";
import { IUpdateAnswerDTO } from "../../../DTOs/answers/IUpdateAnswerDTO";
import { IAnswerSchema } from "../../../entities/Answer";
import { AppError } from "../../../Errors/AppError";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";
import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class UpdateAnswerUseCase {
    constructor(
        @inject('AnswersRepository')
        private answersRepository: IAnswersRepository,
        @inject('QuestionsRepository')
        private questionsRepository: IQuestionsRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ id, questionId, userId, userAnswer }: IUpdateAnswerDTO): Promise<IAnswerSchema> {
        const existentUserAnswer = await this.answersRepository.findById(id);
        const questionExists = await this.questionsRepository.findById(questionId);
        const userExists = await this.usersRepository.findById(userId);

        let updatedUserScore = 0;

        if (!id) {
            throw new AppError("invalid required identifier provided");
        }

        if (!existentUserAnswer) {
            throw new AppError("UserAnswer does not exists");
        }

        const questionsPush = [questionId];

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

        const answer = await this.answersRepository.update({
            id,
            questionId,
            userAnswer,
            userId
        });

        return answer
    }

}

export { UpdateAnswerUseCase };
