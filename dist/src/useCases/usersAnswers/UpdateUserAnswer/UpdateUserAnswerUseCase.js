"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserAnswerUseCase = void 0;
var tsyringe_1 = require("tsyringe");
var AppError_1 = require("../../../Errors/AppError");
var UpdateUserAnswerUseCase = /** @class */ (function () {
    function UpdateUserAnswerUseCase(usersAnswersRepository, questionsRepository, usersRepository) {
        this.usersAnswersRepository = usersAnswersRepository;
        this.questionsRepository = questionsRepository;
        this.usersRepository = usersRepository;
    }
    UpdateUserAnswerUseCase.prototype.execute = function (_a) {
        var id = _a.id, question_id = _a.question_id, user_id = _a.user_id, userAnswer = _a.userAnswer;
        return __awaiter(this, void 0, void 0, function () {
            var existentUserAnswer, questionExists, userExists, updatedUserScore, questionsPush;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.usersAnswersRepository.findById(id)];
                    case 1:
                        existentUserAnswer = _b.sent();
                        return [4 /*yield*/, this.questionsRepository.findById(question_id)];
                    case 2:
                        questionExists = _b.sent();
                        return [4 /*yield*/, this.usersRepository.findById(user_id)];
                    case 3:
                        userExists = _b.sent();
                        updatedUserScore = 0;
                        if (!id) {
                            throw new AppError_1.AppError("invalid required identifier provided");
                        }
                        if (!existentUserAnswer) {
                            throw new AppError_1.AppError("UserAnswer does not exists");
                        }
                        questionsPush = [question_id];
                        if (!(userAnswer != existentUserAnswer.userAnswer && userAnswer === questionExists.correctAnswer)) return [3 /*break*/, 5];
                        updatedUserScore++;
                        return [4 /*yield*/, this.usersRepository.update({
                                id: userExists.id,
                                answeredQuestions: questionsPush,
                                name: userExists.name,
                                email: userExists.email,
                                score: updatedUserScore
                            })];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [4 /*yield*/, this.usersAnswersRepository.update({
                            id: id,
                            question_id: question_id,
                            userAnswer: userAnswer,
                            user_id: user_id
                        })];
                    case 6:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UpdateUserAnswerUseCase = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)('UsersAnswersRepository')),
        __param(1, (0, tsyringe_1.inject)('QuestionsRepository')),
        __param(2, (0, tsyringe_1.inject)("UsersRepository")),
        __metadata("design:paramtypes", [Object, Object, Object])
    ], UpdateUserAnswerUseCase);
    return UpdateUserAnswerUseCase;
}());
exports.UpdateUserAnswerUseCase = UpdateUserAnswerUseCase;
