import { container } from "tsyringe";
import { QuestionsRepository } from "../../repositories/questions/implementations/QuestionsRepository";
import { AnswersRepository } from "../../repositories/answers/implementations/AnswersRepository";
import { UsersRepository } from "../../repositories/users/implementations/UsersRepository";
import { IQuestionsRepository } from "../../repositories/questions/IQuestionsRepository";
import { IUsersRepository } from "../../repositories/users/IUsersRepository";
import { IAnswersRepository } from "../../repositories/answers/IAnswersRepository";

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