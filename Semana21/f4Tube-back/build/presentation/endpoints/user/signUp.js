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
const signUp_1 = require("../../../business/usecase/user/signUp");
const userDatabase_1 = require("../../../data/userDatabase");
const jwtAuthorizer_1 = require("../../lambda/services/jwtAuthorizer");
const bcryptServices_1 = require("../../lambda/services/bcryptServices");
const refreshTokenDataBase_1 = require("../../../data/refreshTokenDataBase");
exports.SignUpEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signUpUC = new signUp_1.SignUpUC(new userDatabase_1.UserDB(), new jwtAuthorizer_1.JwtAuthorizer(), new bcryptServices_1.BcryptService(), new refreshTokenDataBase_1.RefreshTokenDB());
        const newUser = yield signUpUC.execute({
            name: req.body.name,
            birthdate: req.body.birthdate,
            email: req.body.email,
            password: req.body.password,
            photo: req.body.photo,
            device: req.body.device
        });
        res.status(200).send(newUser);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
