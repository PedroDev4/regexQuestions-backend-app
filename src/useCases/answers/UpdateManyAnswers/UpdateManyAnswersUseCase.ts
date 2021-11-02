import { inject, injectable } from "tsyringe";
import { IUpdateAnswerDTO } from "../../../DTOs/answers/IUpdateAnswerDTO";
import { IAnswersRepository } from "../../../repositories/answers/IAnswersRepository";

@injectable()
class UpdateManyUseCase {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute(answers: IUpdateAnswerDTO[]): Promise<void> {
    await this.answersRepository.updateMany(answers)
  }
}

export { UpdateManyUseCase }