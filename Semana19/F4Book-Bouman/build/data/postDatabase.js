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
const posts_1 = require("../business/entities/posts");
class PostDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.postTable = "posts";
    }
    mapDBUserToUser(input) {
        return (input && new posts_1.Post(input.id, input.photo, input.description, input.create_date, input.type, input.user_id));
    }
    ;
    mapDateToDbDate(input) {
        const year = input.getFullYear();
        const month = input.getMonth() + 1;
        const date = input.getDate();
        const hour = input.getHours();
        const minute = input.getMinutes();
        const second = input.getSeconds();
        return `${year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second}`;
    }
    createPost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO ${this.postTable}(id, photo, description, create_date,type,user_id)
            VALUES (
                '${post.getId()}',
                '${post.getPhoto()}',
                '${post.getDescription()}',
                STR_TO_DATE('${this.mapDateToDbDate(post.getCreationDate())}', '%Y-%m-%d %H:%i:%s'),
                '${post.getType()}',
                '${post.getUserId()}'
            )
        `);
        });
    }
}
exports.PostDB = PostDB;
