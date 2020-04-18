"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getAllUserVideos_1 = require("../../../business/usecase/video/getAllUserVideos");
const videoDatabase_1 = require("../../../data/videoDatabase");
const jwtAuthorizer_1 = require("../../lambda/services/jwtAuthorizer");
exports.GetAllUserVideosEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllUserVideosUC = new getAllUserVideos_1.GetAllUserVideosUC(new videoDatabase_1.VideoDB, new jwtAuthorizer_1.JwtAuthorizer());
        const result = yield getAllUserVideosUC.execute({
            token: req.headers.Authorization,
            id: req.query ? req.query.id : ""
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
