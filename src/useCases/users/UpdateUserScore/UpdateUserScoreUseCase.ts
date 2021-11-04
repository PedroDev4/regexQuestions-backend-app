import { inject, injectable } from "tsyringe";
import { IUserSchema } from "../../../entities/IUser";
import { IUsersRepository } from "../../../repositories/users/IUsersRepository";

@injectable()
class UpdateUserScoreUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: number, score: number): Promise<IUserSchema> {
    const user = await this.usersRepository.updateScore(userId, score)
    
    return user
  }
}

export { UpdateUserScoreUseCase }