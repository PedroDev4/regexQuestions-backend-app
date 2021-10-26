import "reflect-metadata";
import express from "express";
import { routes } from "./routes";
import { connectToDB } from "./database";
import "./CrossCutting/Container/index";

const app = express();
app.use(express.json());

connectToDB();

app.use(routes);

app.listen(3334, () => {
    console.log('Server is running on PORT: 3334');
});