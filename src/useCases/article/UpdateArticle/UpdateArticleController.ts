import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateArticleUseCase } from "./UpdateArticleUseCase";

class UpdateArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { author, content, publishedAt,
      title, articleLink, coverLink, subAuthor } = request.body

    const updateArticleUseCase = container.resolve(UpdateArticleUseCase)

    const article = await updateArticleUseCase.execute({
      id: +id, author, content, publishedAt,
      title, articleLink, coverLink, subAuthor
    })

    return response.json(article)
  }
}

export { UpdateArticleController }