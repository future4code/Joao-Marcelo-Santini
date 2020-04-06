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
const singUp_1 = require("../../../business/usecases/user/singUp");
const userDatabase_1 = require("../../../data/userDatabase");
exports.singUpEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const singUpUC = new singUp_1.SingUpUC(new userDatabase_1.UserDB());
        const result = yield singUpUC.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.erroCode || 400).send({
            message: err.message
        });
    }
});
