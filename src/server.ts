import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import { connectToDB } from "./database";
import "./CrossCutting/Container/index";
import { AppError } from "./Errors/AppError";

const app = express();
app.use(express.json());

connectToDB();

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ error: err.message });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal Server Error ${err.message}`,
        });
    }
);

app.listen(3334, () => {
    console.log('Server is running on PORT: 3334');
});