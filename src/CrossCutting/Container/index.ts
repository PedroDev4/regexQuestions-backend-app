import { container } from "tsyringe";
import { QuestionsRepository } from "../../repositories/implementations/QuestionsRepository";
import { UsersAnswersRepository } from "../../repositories/implementations/UsersAnswersRepository";
import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { IQuestionsRepository } from "../../repositories/IQuestionsRepository";
import { IUsersAnswersRepository } from "../../repositories/IUsersAnswersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IQuestionsRepository>(
    "QuestionsRepository",
    QuestionsRepository
);

container.registerSingleton<IUsersAnswersRepository>(
    "UsersAnswersRepository",
    UsersAnswersRepository
);