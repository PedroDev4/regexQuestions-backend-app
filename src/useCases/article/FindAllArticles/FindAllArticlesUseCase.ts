import { inject, injectable } from "tsyringe";
import { IArticleSchema } from "../../../entities/IArticle";
import { IArticleRepository } from "../../../repositories/article/IArticleRepository";

@injectable()
class FindAllArticlesUseCase {
  constructor(
    @inject('ArticleRepository')
    private articleRepository: IArticleRepository
  ) {}

  async execute(): Promise<IArticleSchema[]> {
    const articles = await this.articleRepository.findAll()
    return articles
  }
}

export { FindAllArticlesUseCase }