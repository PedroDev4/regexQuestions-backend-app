import { inject, injectable } from "tsyringe";
import { ICreateArticleDTO } from "../../../DTOs/article/ICreateArticleDTO";
import { IArticleSchema } from "../../../entities/IArticle";
import { IArticleRepository } from "../../../repositories/article/IArticleRepository";

@injectable()
class CreateArticleUseCase {
  constructor(
    @inject('ArticleRepository')
    private articleRepository: IArticleRepository
  ) {}

  async execute({ author, content, publishedAt,
    title, articleLink, coverLink, subAuthor,
  }: ICreateArticleDTO): Promise<IArticleSchema> {
    const article = await this.articleRepository.create({
      author, content, publishedAt: new Date(publishedAt),
      title, articleLink, coverLink, subAuthor,
    })

    return article
  }
}

export { CreateArticleUseCase }