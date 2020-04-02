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
const feed_1 = require("../business/entities/feed");
class FeedDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.relationsTable = "users_relations";
        this.userTableName = "users";
        this.postsTableName = "posts";
    }
    getPostsForFeed(id, orderBy, orderType, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT p.*, u.name
            FROM ${this.relationsTable} ur
            JOIN ${this.userTableName} u
            ON ur.friendAddedId = u.id
            JOIN ${this.postsTableName} p
            ON ur.friendAddedId = p.user_id
            WHERE adderFriendId = '${id}'
            ORDER BY ${orderBy} ${orderType}
            LIMIT ${limit} OFFSET ${offset};
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return result[0].map((post) => {
                return new feed_1.Feed(post.id, post.photo, post.description, post.create_date, post.type, post.user_id, post.name);
            });
        });
    }
    ;
    getPostsForFeedByType(id, type, orderBy, orderType, limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT p.*, u.name
            FROM ${this.relationsTable} ur
            JOIN ${this.userTableName} u
            ON ur.friendAddedId = u.id
            JOIN ${this.postsTableName} p
            ON ur.friendAddedId = p.user_id
            WHERE adderFriendId = '${id}' AND p.type = '${type}'
            ORDER BY ${orderBy} ${orderType}
            LIMIT ${limit} OFFSET ${offset};
        `);
            if (!result[0][0]) {
                return undefined;
            }
            ;
            return result[0].map((post) => {
                post.id,
                    post.photo,
                    post.description,
                    post.create_date,
                    post.type,
                    post.user_id,
                    post.name;
            });
        });
    }
}
exports.FeedDB = FeedDB;
