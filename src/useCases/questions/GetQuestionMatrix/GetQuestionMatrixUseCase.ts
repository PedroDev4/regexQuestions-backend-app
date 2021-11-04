import { IQuestionsRepository } from "../../../repositories/questions/IQuestionsRepository";
import { inject, injectable } from "tsyringe";
import { IQuestionSchema } from "../../../entities/IQuestion";

@injectable()
class GetQuestionMatrixUseCase {

  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute(): Promise<Array<IQuestionSchema[]>> {
    const questions = await this.questionsRepository.findAll();

    const booleanQuestions = questions.filter(question => question.type === 'boolean')
    const stringQuestions = questions.filter(question => question.type === 'multiple')

    const matrixQuestions = await this.buildArray(questions, booleanQuestions, stringQuestions);

    return matrixQuestions;
  }


  private async buildArray(questions: IQuestionSchema[], questionsBoolean: IQuestionSchema[], questionsString: IQuestionSchema[]): Promise<Array<IQuestionSchema[]>> {
    const mainArray: Array<IQuestionSchema[]> = [];
    let subArray: IQuestionSchema[] = [];

    const challengesCount = Math.trunc(questions.length / 3);

    for (let i = 0; i < challengesCount; i++) {
      if (subArray.length === 0) {
        subArray.length = 1;
      }

      subArray = questionsBoolean.slice(subArray.length - 1, (2 + subArray.length) - 1);
      subArray.push(questionsString[i]);

      mainArray.push(subArray);
    }

    return mainArray;
  }

}

export { GetQuestionMatrixUseCase };