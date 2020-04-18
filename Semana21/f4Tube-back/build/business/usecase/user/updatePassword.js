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
class UpdatePasswordUC {
    constructor(userGateway, authenticationGateway, cryptographyGateway) {
        this.userGateway = userGateway;
        this.authenticationGateway = authenticationGateway;
        this.cryptographyGateway = cryptographyGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.authenticationGateway.getUsersInfoFromToken(input.token);
            if (!userInfo) {
                throw new Error("User not found!");
            }
            const user = yield this.userGateway.getUserById(userInfo.id);
            if (!user) {
                throw new Error("User not found!");
            }
            const oldPassword = yield this.cryptographyGateway.compare(input.oldPassword, user.getPassword());
            if (!oldPassword) {
                throw new InvalidParams_1.InvalidParameterError("Invalid password!");
            }
            ;
            const newPassword = yield this.cryptographyGateway.encrypt(input.newPassword);
            yield this.userGateway.updatePassword(userInfo.id, newPassword);
            return {
                message: "Password updated successfully!"
            };
        });
    }
}
exports.UpdatePasswordUC = UpdatePasswordUC;
