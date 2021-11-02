import { ICreateArticleDTO } from "../../DTOs/article/ICreateArticleDTO";
import { IUpdateArticleDTO } from "../../DTOs/article/IUpdateArticleDTO";
import { IArticleSchema } from "../../entities/IArticle";

interface IArticleRepository {
  create({ author, content, publishedAt, title, articleLink, coverLink, subAuthor, videoLink, }: ICreateArticleDTO): Promise<IArticleSchema>
  update({ id, publishedAt, articleLink, author, content, coverLink, subAuthor,
    title, videoLink }: IUpdateArticleDTO): Promise<IArticleSchema>
  findAll(): Promise<IArticleSchema[]>
  findById(id: number): Promise<IArticleSchema>
  delete(id: number): Promise<void>
}

export { IArticleRepository }