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
const deleteVideo_1 = require("../../../business/usecase/video/deleteVideo");
const videoDatabase_1 = require("../../../data/videoDatabase");
const jwtAuthorizer_1 = require("../../lambda/services/jwtAuthorizer");
exports.DeleteVideoEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteVideoUC = new deleteVideo_1.DeleteVideoUC(new videoDatabase_1.VideoDB(), new jwtAuthorizer_1.JwtAuthorizer());
        const result = yield deleteVideoUC.execute({
            token: req.headers.Authorization,
            id: req.params.id
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
