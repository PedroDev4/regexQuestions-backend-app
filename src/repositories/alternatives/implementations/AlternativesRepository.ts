import { PrismaClient } from ".prisma/client";
import { IAlternativeSchema } from "../../../entities/IAlternatives";
import { IAlternativesRepository } from "../IAlternativesRepository";

class AlternativesRepository implements IAlternativesRepository {
  constructor(private alternativesRepository = new PrismaClient().alternative) {}

  async findByQuestionId(questionId: number): Promise<IAlternativeSchema[]> {
    const alternatives = await this.alternativesRepository.findMany({
      where: {
        question: {
          id: questionId
        }
      }
    })

    return alternatives
  }
}

export { AlternativesRepository }