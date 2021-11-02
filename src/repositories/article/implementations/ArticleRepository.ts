import { PrismaClient } from ".prisma/client";
import { ICreateArticleDTO } from "../../../DTOs/article/ICreateArticleDTO";
import { IUpdateArticleDTO } from "../../../DTOs/article/IUpdateArticleDTO";
import { IArticleSchema } from "../../../entities/IArticle";
import { IArticleRepository } from "../IArticleRepository";

class ArticleRepository implements IArticleRepository {
  constructor(private articleRepository = new PrismaClient().article) {}

  async create({ author, content, publishedAt, title, articleLink,
    coverLink, subAuthor, videoLink }: ICreateArticleDTO): Promise<IArticleSchema> {
    const article = await this.articleRepository.create({
      data: {
        author, content, publishedAt, title, articleLink,
        coverLink, subAuthor, videoLink
      }
    })

    return article
  }

  async update({ id, publishedAt, articleLink, author, content, coverLink, subAuthor, title, videoLink }: IUpdateArticleDTO): Promise<IArticleSchema> {
    const article = await this.articleRepository.update({
      data: {
        publishedAt, articleLink, author, content, coverLink, subAuthor, title, videoLink
      },
      where: { id }
    })

    return article
  }

  async findById(id: number): Promise<IArticleSchema> {
    const article = await this.articleRepository.findUnique({
      where: { id }
    })

    return article
  }

  async findAll(): Promise<IArticleSchema[]> {
    const articles = await this.articleRepository.findMany()
    return articles
  }

  async delete(id: number): Promise<void> {
    await this.articleRepository.delete({
      where: { id }
    })
  }
}

export { ArticleRepository };
