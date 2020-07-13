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
const baseDatabase_1 = require("./baseDatabase");
class RefreshTokenDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.refreshTokenTableName = "refresh_token";
    }
    createRefreshToken(input) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO ${this.refreshTokenTableName}(token, device, user_id)
            VALUES('${input.token}', '${input.device}', '${input.user_id}');
        `);
        });
    }
    deleteRefreshToken(device, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            DELETE FROM ${this.refreshTokenTableName}
            WHERE device = '${device}' AND user_id = '${userId}';
        `);
        });
    }
    ;
    getRefreshToken(device, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT * 
            FROM ${this.refreshTokenTableName}
            WHERE device = '${device}' AND user_id = '${userId}';
        `);
            if (!result[0][0]) {
                return undefined;
            }
            ;
            return result[0][0] && {
                token: result[0][0].token,
                device: result[0][0].device,
                user_id: result[0][0].user_id
            };
        });
    }
    ;
}
exports.RefreshTokenDB = RefreshTokenDB;
