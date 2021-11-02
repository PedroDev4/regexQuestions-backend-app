import { inject, injectable } from "tsyringe";
import { IArticleRepository } from "../../../repositories/article/IArticleRepository";

@injectable()
class DeleteArticleUseCase {
  constructor(
    @inject('ArticleRepository')
    private articleRepository: IArticleRepository
  ) {}

  async execute(id: number): Promise<void> {
    await this.articleRepository.delete(id)
  }
}

export { DeleteArticleUseCase }