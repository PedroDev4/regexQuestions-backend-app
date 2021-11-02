import { inject, injectable } from "tsyringe";
import { IArticleSchema } from "../../../entities/IArticle";
import { IArticleRepository } from "../../../repositories/article/IArticleRepository";

@injectable()
class FindArticleByIdUseCase {
  constructor(
    @inject('ArticleRepository')
    private articleRepository: IArticleRepository
  ) {}

  async execute(id: number): Promise<IArticleSchema> {
    const article = await this.articleRepository.findById(id)

    return article
  }
}

export { FindArticleByIdUseCase }