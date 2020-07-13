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
const user_1 = require("../../entites/user");
const uuid_1 = require("uuid");
const InvalidParams_1 = require("../../error/InvalidParams");
class SignUpUC {
    constructor(userGateway, authenticationGateway, cryptographyGateway, refreshTokenGateway) {
        this.userGateway = userGateway;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
        this.refreshTokenGateway = refreshTokenGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userGateway.login(input.email);
            if (user) {
                throw new Error("This email has already been registered!");
            }
            const id = uuid_1.v4();
            if (input.password.length < 6) {
                throw new Error("Minimum password length is 6");
            }
            else if (input.email.indexOf("@") === -1) {
                throw new InvalidParams_1.InvalidParameterError("Invalid Email");
            }
            else {
                const hashPassword = yield this.cryptographyGateway.encrypt(input.password);
                const user = new user_1.User(id, input.name, input.birthdate, input.email, hashPassword, input.photo);
                yield this.userGateway.signUp(user);
                const accessToken = this.authenticationGateway.generateToken({
                    id: user.getId(),
                }, process.env.ACCESS_TOKEN_TIME);
                const refreshToken = this.authenticationGateway.generateToken({
                    id: user.getId(),
                    userDevice: input.device
                }, process.env.REFRESH_TOKEN_TIME);
                yield this.refreshTokenGateway.createRefreshToken({
                    token: refreshToken,
                    user_id: user.getId(),
                    device: input.device
                });
                return {
                    message: "User Created Succefully",
                    accessToken: accessToken,
                    refreshToken: refreshToken
                };
            }
        });
    }
}
exports.SignUpUC = SignUpUC;
