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
const user_1 = require("../business/entites/user");
class UserDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.userTableName = "user";
    }
    mapUserToDbUser(input) {
        return (input &&
            new user_1.User(input.id, input.name, input.birthdate, input.email, input.password, input.photo));
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT *
            FROM ${this.userTableName}
            WHERE id = '${id}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return yield this.mapUserToDbUser(result[0][0]);
        });
    }
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO ${this.userTableName}(id, name, birthdate, email, password, photo)
            VALUES(
                '${user.getId()}',
                '${user.getName()}',
                '${user.getBirthdate()}',
                '${user.getEmail()}',
                '${user.getPassword()}',
                '${user.getPhoto()}'
            )
        `);
        });
    }
    updatePassword(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            UPDATE ${this.userTableName}
            SET password = '${password}'
            WHERE id = '${id}'
        `);
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.connection.raw(`
            SELECT *
            FROM ${this.userTableName}
            WHERE email='${email}'
        `);
            if (!user[0][0]) {
                return undefined;
            }
            return yield this.mapUserToDbUser(user[0][0]);
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.connection.raw(`
            SELECT * 
            FROM ${this.userTableName}
        `);
            if (!users[0][0]) {
                return undefined;
            }
            ;
            return yield users[0].map((user) => {
                return new user_1.User(user.id, user.name, user.birthdate, user.email, user.password, user.photo);
            });
        });
    }
}
exports.UserDB = UserDB;
