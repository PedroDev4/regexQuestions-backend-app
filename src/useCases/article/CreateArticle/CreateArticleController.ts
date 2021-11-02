import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateArticleUseCase } from "./CreateArticleUseCase";

class CreateArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { author, content, publishedAt,
      title, articleLink, coverLink, subAuthor } = request.body

    const createArticleUseCase = container.resolve(CreateArticleUseCase)

    const article = await createArticleUseCase.execute({
      author, content, publishedAt,
      title, articleLink, coverLink, subAuthor
    })

    return response.json(article)
  }
}

export { CreateArticleController }