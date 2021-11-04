import { container } from "tsyringe";
import { QuestionsRepository } from "../../repositories/questions/implementations/QuestionsRepository";
import { AnswersRepository } from "../../repositories/answers/implementations/AnswersRepository";
import { UsersRepository } from "../../repositories/users/implementations/UsersRepository";
import { IQuestionsRepository } from "../../repositories/questions/IQuestionsRepository";
import { IUsersRepository } from "../../repositories/users/IUsersRepository";
import { IAnswersRepository } from "../../repositories/answers/IAnswersRepository";
import { IArticleRepository } from "../../repositories/article/IArticleRepository";
import { ArticleRepository } from "../../repositories/article/implementations/ArticleRepository";
import { IAlternativesRepository } from "../../repositories/alternatives/IAlternativesRepository";
import { AlternativesRepository } from "../../repositories/alternatives/implementations/AlternativesRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IQuestionsRepository>(
    "QuestionsRepository",
    QuestionsRepository
);

container.registerSingleton<IAnswersRepository>(
    "AnswersRepository",
    AnswersRepository
);

container.registerSingleton<IArticleRepository>('ArticleRepository', ArticleRepository)
container.registerSingleton<IAlternativesRepository>('AlternativeRepository', AlternativesRepository)