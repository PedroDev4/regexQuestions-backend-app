import { Router } from "express";
import { FindAlternativesByQuestionIdController } from "./useCases/alternatives/FindAlternativesByQuestionId/FindAlternativesByQuestionIdController";
import { CreateAnswerController } from "./useCases/answers/CreateAnswer/CreateAnswerController";
import { CreateManyAnswersController } from "./useCases/answers/CreateManyAnswers/CreateManyAnswersController";
import { DeleteAnswerController } from "./useCases/answers/DeleteAnswer/DeleteAnswerController";
import { FindAnswerByIdController } from "./useCases/answers/FindAnswerById/FindAnswerByIdController";
import { FindAnswersByQuestionController } from "./useCases/answers/FindAnswersByQuestion/FindAnswersByQuestionController";
import { FindAnswersByUserIdController } from "./useCases/answers/FindAnswersByUserId/FindAnswersByUserIdController";
import { UpdateAnswerController } from "./useCases/answers/UpdateAnswer/UpdateAnswerController";
import { UpdateManyAnswersController } from "./useCases/answers/UpdateManyAnswers/UpdateManyAnswersController";
import { CreateArticleController } from "./useCases/article/CreateArticle/CreateArticleController";
import { DeleteArticleController } from "./useCases/article/DeleteArticle/DeleteArticleController";
import { FindAllArticlesController } from "./useCases/article/FindAllArticles/FindAllArticlesController";
import { FindArticleByIdController } from "./useCases/article/FindArticleById/FindArticleByIdController";
import { UpdateArticleController } from "./useCases/article/UpdateArticle/UpdateArticleController";
import { CreateQuestionController } from "./useCases/questions/CreateQuestion/CreateQuestionController";
import { DeleteQuestionController } from "./useCases/questions/DeleteQuestion/DeleteQuestionController";
import { FindAllQuestionsController } from "./useCases/questions/FindAllQuestions/FindAllQuestionsController";
import { FindQuestionByIdController } from "./useCases/questions/FindQuestionById/FindQuestionByIdController";
import { GetQuestionMatrixController } from "./useCases/questions/GetQuestionMatrix/GetQuestionMatrixController";
import { UpdateQuestionController } from "./useCases/questions/UpdateQuestion/UpdateQuestionController";
import { CreateUserController } from "./useCases/users/CreateUser/CreateUserController";
import { DeleteUserController } from "./useCases/users/DeleteUser/DeleteUserController";
import { FindUserAnsweredQuestionsController } from "./useCases/users/FindUserAnsweredQuestions/FindUserAnsweredQuestionsController";
import { FindUserByEmailController } from "./useCases/users/FindUserByEmail/FindUserByEmailController";
import { FindUserByIdController } from "./useCases/users/FIndUserById/FindUserByIdController";
import { UpdateUserController } from "./useCases/users/UpdateUser/UpdateUserController";
import { UpdateUserScoreController } from "./useCases/users/UpdateUserScore/UpdateUserScoreController";

const routes = Router();

const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();
const findUserByEmailController = new FindUserByEmailController();
const findUserAnsweredQuestionsController = new FindUserAnsweredQuestionsController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();
const updateUserScore = new UpdateUserScoreController()

const createQuestionController = new CreateQuestionController();
const findQuestionByIdController = new FindQuestionByIdController();
const findAllQuestionsController = new FindAllQuestionsController();
const updateQuestionController = new UpdateQuestionController();
const deleteQuestionController = new DeleteQuestionController();
const getQuestionsMatrixController = new GetQuestionMatrixController()

const createAnswerController = new CreateAnswerController();
const deleteAnswerController = new DeleteAnswerController();
const findAnswerById = new FindAnswerByIdController();
const findAnswersByUserIdController = new FindAnswersByUserIdController();
const findAnswersByQuestionController = new FindAnswersByQuestionController();
const updateAnswerController = new UpdateAnswerController();
const createManyAnswersController = new CreateManyAnswersController()
const updateManyAnswersController = new UpdateManyAnswersController()

const createArticleController = new CreateArticleController()
const updateArticleController = new UpdateArticleController()
const deleteArticleController = new DeleteArticleController()
const findArticleByIdController = new FindArticleByIdController()
const findAllArticlesController = new FindAllArticlesController()

const findAlternativesByQuestionIdController = new FindAlternativesByQuestionIdController()

routes.post("/users", createUserController.handle);
routes.get("/users/:id", findUserByIdController.handle);
routes.get('/matrix/questions', getQuestionsMatrixController.handle);
routes.put("/score/users/:userId/:score", updateUserScore.execute)
routes.get("/users/email/:email", findUserByEmailController.handle);
routes.get("/users/questions/:id", findUserAnsweredQuestionsController.handle);
routes.put("/users/:id", updateUserController.handle);
routes.delete("/users/:id", deleteUserController.handle);

routes.post("/questions", createQuestionController.handle);
routes.get("/questions/:id", findQuestionByIdController.handle);
routes.get("/questions", findAllQuestionsController.handle);
routes.put("/questions/:id", updateQuestionController.handle);
routes.delete("/questions/:id", deleteQuestionController.handle);

routes.post("/answers", createAnswerController.handle);
routes.post("/answers/batch", createManyAnswersController.handle);
routes.put("/answers/batch", updateManyAnswersController.handle)
routes.get("/answers/:id", findAnswerById.handle);
routes.get("/answers/question/:questionId", findAnswersByQuestionController.handle);
routes.get("/answers/user/:userId", findAnswersByUserIdController.handle);
routes.put("/answers/:id", updateAnswerController.handle);
routes.delete("/answers/:id", deleteAnswerController.handle);

routes.post('/article', createArticleController.handle)
routes.put('/article/:id', updateArticleController.handle)
routes.delete('/article/:id', deleteArticleController.handle)
routes.get('/article/:id', findArticleByIdController.handle)
routes.get('/articles', findAllArticlesController.handle)

routes.get('/alternatives/:questionId', findAlternativesByQuestionIdController.handle)

routes.get("/", (request, response) => {
    return response.status(200).send('Server is running')
});

export { routes };
