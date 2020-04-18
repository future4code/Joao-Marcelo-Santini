"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signUp_1 = require("./endpoints/user/signUp");
const login_1 = require("./endpoints/user/login");
const createVideo_1 = require("./endpoints/video/createVideo");
const feedOfVideos_1 = require("./endpoints/video/feedOfVideos");
const getAllUsers_1 = require("./endpoints/user/getAllUsers");
const deleteVideo_1 = require("./endpoints/video/deleteVideo");
const updateVideo_1 = require("./endpoints/video/updateVideo");
const getVideoDetail_1 = require("./endpoints/video/getVideoDetail");
const getAllUserVideos_1 = require("./endpoints/video/getAllUserVideos");
const updatePassword_1 = require("./endpoints/user/updatePassword");
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json()); // Linha mágica (middleware)
// user
app.post("/signup", signUp_1.SignUpEndpoint);
app.post("/login", login_1.LoginEndpoint);
app.get("/users", getAllUsers_1.GetAllUsersEndpoint);
app.post("/changePassword", updatePassword_1.UpdatePasswordEndpoint);
// video
app.post("/createVideo", createVideo_1.CreateVideoEndpoint);
app.get("/feed", feedOfVideos_1.FeedOfVideosEndpoint);
app.delete("/deleteVideo/:id", deleteVideo_1.DeleteVideoEndpoint);
app.post("/updateVideo/:id", updateVideo_1.UpdateVideoEndpoint);
app.get("/getVideoDetail/:id", getVideoDetail_1.GetVideoDetailEndpoint);
app.get("/getAllUserVideos", getAllUserVideos_1.GetAllUserVideosEndpoint);
exports.default = app;
