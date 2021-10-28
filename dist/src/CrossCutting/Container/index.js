"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var QuestionsRepository_1 = require("../../repositories/implementations/QuestionsRepository");
var UsersAnswersRepository_1 = require("../../repositories/implementations/UsersAnswersRepository");
var UsersRepository_1 = require("../../repositories/implementations/UsersRepository");
tsyringe_1.container.registerSingleton("UsersRepository", UsersRepository_1.UsersRepository);
tsyringe_1.container.registerSingleton("QuestionsRepository", QuestionsRepository_1.QuestionsRepository);
tsyringe_1.container.registerSingleton("UsersAnswersRepository", UsersAnswersRepository_1.UsersAnswersRepository);
