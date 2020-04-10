import express from "express";
import { signUpEndpoint } from "./endpoints/user/signUp";


const app = express();
app.use(express.json());

app.post("/signUp", signUpEndpoint)


export default app;