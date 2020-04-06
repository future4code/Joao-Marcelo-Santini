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
const userDatabase_1 = require("../../data/userDatabase");
const signUpUC_1 = require("../../business/usecases/signUpUC");
exports.signUpEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const signUpUC = new signUpUC_1.SignUpUC(new userDatabase_1.UserDB());
        const result = yield signUpUC.execute({
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
});
