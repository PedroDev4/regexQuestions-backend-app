import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindArticleByIdUseCase } from "./FindArticleByIdUseCase";

class FindArticleByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const findArticleByIdUseCase = await container.resolve(FindArticleByIdUseCase)

    const article = await findArticleByIdUseCase.execute(+id)

    return response.json(article)
  }
}

export { FindArticleByIdController }