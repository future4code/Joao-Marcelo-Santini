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
const updatePassword_1 = require("../../../business/usecase/user/updatePassword");
const userDatabase_1 = require("../../../data/userDatabase");
const jwtAuthorizer_1 = require("../../lambda/services/jwtAuthorizer");
const bcryptServices_1 = require("../../lambda/services/bcryptServices");
exports.UpdatePasswordEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oldPassword = req.body.oldPassword;
        const newPassword = req.body.newPassword;
        const token = req.headers.Authorization;
        if (oldPassword === newPassword) {
            throw new Error("You cannot use the last same password!");
        }
        const updatePasswordUC = new updatePassword_1.UpdatePasswordUC(new userDatabase_1.UserDB(), new jwtAuthorizer_1.JwtAuthorizer(), new bcryptServices_1.BcryptService());
        const result = yield updatePasswordUC.execute({
            token,
            oldPassword,
            newPassword
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
