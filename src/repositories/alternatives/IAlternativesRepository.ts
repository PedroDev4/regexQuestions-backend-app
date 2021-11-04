import { IAlternativeSchema } from "../../entities/IAlternatives";

interface IAlternativesRepository {
  findByQuestionId(questionId: number): Promise<IAlternativeSchema[]>
}

export { IAlternativesRepository }