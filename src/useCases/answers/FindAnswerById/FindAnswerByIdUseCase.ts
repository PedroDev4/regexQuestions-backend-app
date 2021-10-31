import { inject, injectable } from "tsyringe";
import { IAnswerSchema } from "../../../entities/Answer";
import { AppError } from "../../../Errors/AppError";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";

@injectable()
class FindAnswerByIdUseCase {

    constructor(
        @inject('AnswersRepository')
        private answersRepository: IAnswersRepository
    ) {}

    async execute(id: number): Promise<IAnswerSchema> {
        if (!id) {
            throw new AppError('Invalid identifier provided');
        }

        const answer = await this.answersRepository.findById(id);

        if (!answer) {
            throw new AppError('Answer does not exists');
        }

        return answer;
    }

}

export { FindAnswerByIdUseCase };