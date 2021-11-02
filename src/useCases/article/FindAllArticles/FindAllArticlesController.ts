import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAllArticlesUseCase } from "./FindAllArticlesUseCase";

class FindAllArticlesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllArticlesUseCase = container.resolve(FindAllArticlesUseCase)

    const articles = await findAllArticlesUseCase.execute()

    return response.json(articles)
  }
}

export { FindAllArticlesController }