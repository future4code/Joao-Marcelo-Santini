import express, { Request, Response } from "express";
import { singUpEndpoint } from "./endpoints/user/singUp";
import { loginEndpoint } from "./endpoints/user/login";
import { followUserEndpoint } from "./endpoints/user/followUser";

const app = express();
app.use(express.json());

app.post('/signup', singUpEndpoint)
app.post('/login', loginEndpoint)
app.post('/user/follow', followUserEndpoint)


export default app;

