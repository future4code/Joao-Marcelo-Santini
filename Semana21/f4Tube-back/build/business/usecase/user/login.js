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
const InvalidParams_1 = require("../../error/InvalidParams");
class LoginUC {
    constructor(userGateway, authenticationGateway, cryptographyGateway, refreshTokenGateway) {
        this.userGateway = userGateway;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
        this.refreshTokenGateway = refreshTokenGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (input.email.indexOf("@") === -1 || input.password.length < 6 || !input.email || !input.password) {
                throw new InvalidParams_1.InvalidParameterError("Invalid password or email!");
            }
            ;
            const user = yield this.userGateway.login(input.email);
            if (!user) {
                throw new Error("User not Found!");
            }
            ;
            const compare = yield this.cryptographyGateway.compare(input.password, user.getPassword());
            if (!compare) {
                throw new InvalidParams_1.InvalidParameterError("Invalid password or email!");
            }
            ;
            const accessToken = this.authenticationGateway.generateToken({
                id: user.getId(),
            }, process.env.ACCESS_TOKEN_TIME);
            const refreshToken = this.authenticationGateway.generateToken({
                id: user.getId(),
                userDevice: input.device
            }, process.env.REFRESH_TOKEN_TIME);
            const refreshTokenForUserAndDevice = yield this.refreshTokenGateway.getRefreshToken(input.device, user.getId());
            if (refreshTokenForUserAndDevice) {
                yield this.refreshTokenGateway.deleteRefreshToken(input.device, user.getId());
            }
            yield this.refreshTokenGateway.createRefreshToken({
                token: refreshToken,
                user_id: user.getId(),
                device: input.device
            });
            return {
                message: "User Logged Succefully",
                accessToken: accessToken,
                refreshToken: refreshToken
            };
        });
    }
}
exports.LoginUC = LoginUC;
