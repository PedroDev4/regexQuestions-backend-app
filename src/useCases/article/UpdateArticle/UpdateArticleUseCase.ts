import { inject, injectable } from "tsyringe";
import { IUpdateArticleDTO } from "../../../DTOs/article/IUpdateArticleDTO";
import { IArticleSchema } from "../../../entities/IArticle";
import { IArticleRepository } from "../../../repositories/article/IArticleRepository";

@injectable()
class UpdateArticleUseCase {
  constructor(
    @inject('ArticleRepository')
    private articleRepository: IArticleRepository
  ) {}

  async execute({ id, publishedAt, articleLink, author, content, coverLink, subAuthor,
    title, videoLink }: IUpdateArticleDTO): Promise<IArticleSchema> {
    const article = await this.articleRepository.update({
      id, publishedAt: new Date(publishedAt), articleLink, author, content, coverLink, subAuthor,
      title, videoLink
    })

    return article
  }
}

export { UpdateArticleUseCase }