import { inject, injectable } from "tsyringe";
import { IAlternativeSchema } from "../../../entities/IAlternatives";
import { IAlternativesRepository } from "../../../repositories/alternatives/IAlternativesRepository";

@injectable()
class FindAlternativesByQuestionIdUseCase {
  constructor(
    @inject('AlternativeRepository')
    private alternativeRepository: IAlternativesRepository
  ) {}

  async execute(questionId: number): Promise<IAlternativeSchema[]> {
    const alternatives = await this.alternativeRepository.findByQuestionId(questionId)
    return alternatives
  }
}

export { FindAlternativesByQuestionIdUseCase }