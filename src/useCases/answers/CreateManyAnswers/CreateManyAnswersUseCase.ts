import { inject, injectable } from "tsyringe";
import { ICreateAnswerDTO } from "../../../DTOs/answers/ICreateAnswerDTO";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";

@injectable()
class CreateManyAnswersUseCase {
    constructor(
        @inject('AnswersRepository')
        private answersRepository: IAnswersRepository
    ) {}

    async execute(answers: ICreateAnswerDTO[]): Promise<void>{
      await this.answersRepository.createMany(answers)
    }
}

export { CreateManyAnswersUseCase }