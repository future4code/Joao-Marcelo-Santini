import express, { Request, Response } from "express";
import { singUpEndpoint } from "./endpoints/user/singUp";
import { loginEndpoint } from "./endpoints/user/login";
import { followUserEndpoint } from "./endpoints/user/followUser";
import { unfollowUserEndpoint } from "./endpoints/user/unfollowUser";
import { CreatePostEndpoint } from "./endpoints/posts/createPost";

const app = express();
app.use(express.json());

app.post('/signup', singUpEndpoint)
app.post('/login', loginEndpoint)
app.post('/user/follow', followUserEndpoint)
app.delete('/user/unfollow', unfollowUserEndpoint)

app.post('/createPost', CreatePostEndpoint)


export default app;

