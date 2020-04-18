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
const getAllUsers_1 = require("../../../business/usecase/user/getAllUsers");
const userDatabase_1 = require("../../../data/userDatabase");
const jwtAuthorizer_1 = require("../../lambda/services/jwtAuthorizer");
exports.GetAllUsersEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllUsersUC = new getAllUsers_1.GetAllUserUC(new userDatabase_1.UserDB(), new jwtAuthorizer_1.JwtAuthorizer());
        const result = yield getAllUsersUC.execute({
            token: req.headers.Authorization
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
