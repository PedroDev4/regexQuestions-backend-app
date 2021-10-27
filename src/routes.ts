import { Router } from "express";
import { CreateUserController } from "./useCases/users/CreateUser/CreateUserController";
import { FindUserByIdController } from "./useCases/users/FIndUserById/FindUserByIdController";
import { FindUserByEmailController } from "./useCases/users/FindUserByEmail/FindUserByEmailController";
import { FindUserAnsweredQuestionsController } from "./useCases/users/FindUserAnsweredQuestions/FindUserAnsweredQuestionsController";
import { UpdateUserController } from "./useCases/users/UpdateUser/UpdateUserController";
import { DeleteUserController } from "./useCases/users/DeleteUser/DeleteUserController";
import { CreateQuestionController } from "./useCases/questions/CreateQuestion/CreateQuestionController";
import { FindQuestionByIdController } from "./useCases/questions/FindQuestionById/FindQuestionByIdController";
import { FindAllQuestionsController } from "./useCases/questions/FindAllQuestions/FindAllQuestionsController";
import { UpdateQuestionController } from "./useCases/questions/UpdateQuestion/UpdateQuestionController";
import { DeleteQuestionController } from "./useCases/questions/DeleteQuestion/DeleteQuestionController";


const routes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const findUserByEmailController = new FindUserByEmailController();
const findUserAnsweredQuestionsController = new FindUserAnsweredQuestionsController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

const createQuestionController = new CreateQuestionController();
const findQuestionByIdController = new FindQuestionByIdController();
const findAllQuestionsController = new FindAllQuestionsController();
const updateQuestionController = new UpdateQuestionController();
const deleteQuestionController = new DeleteQuestionController();

routes.post("/users", createUserController.handle);
routes.get("/users/:id", findUserByIdController.handle);
routes.get("/users/:email", findUserByEmailController.handle);
routes.get("/users/questions", findUserAnsweredQuestionsController.handle);
routes.put("/users", updateUserController.handle);
routes.delete("/users", deleteUserController.handle);

routes.post("/questions", createQuestionController.handle);
routes.get("/questions/:id", findQuestionByIdController.handle);
routes.get("/questions", findAllQuestionsController.handle);
routes.put("/questions", updateQuestionController.handle);
routes.delete("/questions", deleteQuestionController.handle);

export { routes }; 