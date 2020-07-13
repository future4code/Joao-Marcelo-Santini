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
class GetAllUserUC {
    constructor(userGateway, authenticationToken) {
        this.userGateway = userGateway;
        this.authenticationToken = authenticationToken;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.authenticationToken.getUsersInfoFromToken(input.token);
            if (!userInfo) {
                throw new Error("User info not found!");
            }
            const users = yield this.userGateway.getAllUsers();
            if (!users) {
                throw new Error("Users list are empty!");
            }
            return {
                Users: users.map(user => {
                    return {
                        id: user.getId(),
                        name: user.getName(),
                        birthdate: user.getBirthdate(),
                        email: user.getEmail(),
                        photo: user.getPhoto()
                    };
                })
            };
        });
    }
}
exports.GetAllUserUC = GetAllUserUC;
