import { Router } from "express";
import { CreateUserController } from "./useCases/users/CreateUser/CreateUserController";
import { FindUserByIdController } from "./useCases/users/FIndUserById/FindUserByIdController";
import { FindUserByEmailController } from "./useCases/users/FindUserByEmail/FindUserByEmailController";
import { FindUserAnsweredQuestionsController } from "./useCases/users/FindUserAnsweredQuestions/FindUserAnsweredQuestionsController";
import { UpdateUserController } from "./useCases/users/UpdateUser/UpdateUserController";
import { DeleteUserController } from "./useCases/users/DeleteUser/DeleteUserController";

const routes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const findUserByEmailController = new FindUserByEmailController();
const findUserAnsweredQuestionsController = new FindUserAnsweredQuestionsController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

routes.post("/users", createUserController.handle);
routes.get("/users/:id", findUserByIdController.handle);
routes.get("/users/:email", findUserByEmailController.handle);
routes.get("/users/questions", findUserAnsweredQuestionsController.handle);
routes.put("/users", updateUserController.handle);
routes.delete("/users", deleteUserController.handle);

export { routes }; 