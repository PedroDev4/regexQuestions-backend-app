"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
require("express-async-errors");
var routes_1 = require("./routes");
var database_1 = require("./database");
require("./CrossCutting/Container/index");
var AppError_1 = require("./Errors/AppError");
var app = (0, express_1.default)();
app.use(express_1.default.json());
(0, database_1.connectToDB)();
app.use(routes_1.routes);
app.use(function (err, request, response, next) {
    if (err instanceof AppError_1.AppError) {
        return response.status(err.statusCode).json({ error: err.message });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error " + err.message,
    });
});
app.listen(process.env.PORT || 3334, function () {
    console.log('Server is running on PORT: 3334');
});
