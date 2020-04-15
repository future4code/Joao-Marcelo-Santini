import express, { Request, Response } from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";
import { changePasswordEndpoint } from "./endpoints/user/changePassword";
import { loginUserEndpoint } from "./endpoints/user/login";

const app = express();
app.use(express.json()); // Linha mágica (middleware)

app.post("/signUp", signUpEndpoint)
app.post("/user/changePassword", changePasswordEndpoint)
app.get("/login", loginUserEndpoint)

export default app;
