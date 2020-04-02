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
const users_1 = require("../business/entities/users");
const relations_1 = require("../business/entities/relations");
class UserDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.userTable = "users";
        this.relationsTable = "users_relations";
    }
    mapDBUserToUser(input) {
        return (input && new users_1.User(input.id, input.name, input.email, input.password));
    }
    ;
    mapDBRelationToRelation(input) {
        return (input && new relations_1.Relation(input.adderFriendId, input.friendAddedId));
    }
    ;
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO ${this.userTable} (id, name, email, password) 
            VALUES (
                '${user.getId()}',
                '${user.getName()}',
                '${user.getEmail()}',
                '${user.getPassword()}'
            )
        `);
        });
    }
    ;
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.raw(`
           SELECT * FROM ${this.userTable} WHERE email = '${email}'
        `);
            if (!user[0][0]) {
                return undefined;
            }
            return this.mapDBUserToUser(user[0][0]);
        });
    }
    ;
    createUserFollowRelation(adderFriendId, friendAddedId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
           INSERT INTO ${this.relationsTable} (adderFriendId, friendAddedId)
           VALUES ('${adderFriendId}', '${friendAddedId}')
        `);
        });
    }
    ;
    userUnfollowRelation(adderFriendId, friendAddedId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
         DELETE FROM ${this.relationsTable}
         WHERE adderFriendId='${adderFriendId}' AND friendAddedId='${friendAddedId}'
         `);
        });
    }
    getUserRelationsData(adderFriendId, friendAddedId) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
        SELECT * 
        FROM ${this.relationsTable} 
        WHERE adderFriendId='${adderFriendId}' AND friendAddedId='${friendAddedId}'  
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return this.mapDBRelationToRelation(result[0][0]);
        });
    }
}
exports.UserDB = UserDB;
