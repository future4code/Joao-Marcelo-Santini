import express, { Request, Response } from "express";
import { registerProductEndpoint } from "./endpoints/registerProduct";

const app = express();
app.use(express.json());

app.post('/register', registerProductEndpoint)


export default app;