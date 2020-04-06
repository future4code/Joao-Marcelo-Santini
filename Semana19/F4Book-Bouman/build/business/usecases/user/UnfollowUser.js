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
class UnfollowUserUC {
    constructor(userGateway) {
        this.userGateway = userGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const relations = yield this.userGateway.getUserRelationsData(input.adderFriendId, input.friendAddedId);
            if (!relations) {
                throw new Error("Não é seguido!");
            }
            yield this.userGateway.userUnfollowRelation(input.adderFriendId, input.friendAddedId);
            return {
                message: "Não está mais seguindo.!"
            };
        });
    }
}
exports.UnfollowUserUC = UnfollowUserUC;
