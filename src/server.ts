import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import "./CrossCutting/Container/index";
import { AppError } from "./Errors/AppError";

const app = express();
app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({ error: err.message });
        }

        console.log(err)

        return response.status(500).json({
            status: "error",
            message: `Internal Server Error ${err.message}`,
        });
    }
);

app.listen(process.env.PORT || 3334, () => {
    console.log('Server is running on PORT: 3334');
});