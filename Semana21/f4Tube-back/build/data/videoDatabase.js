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
const video_1 = require("../business/entites/video");
const baseDatabase_1 = require("./baseDatabase");
const feed_1 = require("../business/entites/feed");
class VideoDB extends baseDatabase_1.BaseDB {
    constructor() {
        super(...arguments);
        this.videoTableName = "videos";
        this.userTableName = "user";
    }
    mapVideoToDbVideo(input) {
        return (input &&
            new video_1.Video(input.id, input.title, input.link, input.description, input.creationDate, input.user_id));
    }
    ;
    mapFeedToDbVideo(input) {
        return (input &&
            new feed_1.Feed(input.id, input.title, input.link, input.description, input.creationDate, input.user_id, input.name, input.userPhoto));
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
    ;
    checkVideoByLink(link) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT *
            FROM ${this.videoTableName}
            WHERE link = '${link}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return yield this.mapVideoToDbVideo(result[0][0]);
        });
    }
    createVideo(video) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            INSERT INTO ${this.videoTableName} (id, title, link, description, creationDate, user_id)
            VALUES(
                '${video.getId()}',
                '${video.getTitle()}',
                '${video.getLink()}',
                '${video.getDescription()}',
                STR_TO_DATE('${this.mapDateToDbDate(video.getCreationDate())}', '%Y-%m-%d %H:%i:%s'),
                '${video.getUser_id()}'
            )
        `);
        });
    }
    ;
    deleteVideo(id, user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            DELETE FROM ${this.videoTableName}
            WHERE id = '${id}' AND user_id = '${user_id}';
        `);
        });
    }
    updateVideo(id, user_id, title, description) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
            UPDATE ${this.videoTableName}
            SET title = '${title}', description = '${description}'
            WHERE id = '${id}' AND user_id = '${user_id}'
        `);
        });
    }
    getVideos() {
        return __awaiter(this, void 0, void 0, function* () {
            const videos = yield this.connection.raw(`
            SELECT v.*, u.name
            FROM ${this.videoTableName} v
            JOIN ${this.userTableName} u
            ON v.user_id = u.id
        `);
            if (!videos[0][0]) {
                return undefined;
            }
            ;
            return yield videos[0].map((video) => {
                return new feed_1.Feed(video.id, video.title, video.link, video.description, video.creationDate, video.user_id, video.name, video.userPhoto);
            });
        });
    }
    ;
    getAllUserVideos(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT v.*, u.name
            FROM ${this.videoTableName} v
            JOIN ${this.userTableName} u
            ON u.id = v.user_id
            WHERE v.user_id = '${id}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            return yield result[0].map((video) => {
                return new feed_1.Feed(video.id, video.title, video.link, video.description, video.creationDate, video.user_id, video.name, video.userPhoto);
            });
        });
    }
    getVideoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT v.*, u.name
            FROM ${this.videoTableName} v
            JOIN ${this.userTableName} u
            ON u.id = v.user_id
            WHERE v.id = '${id}'
        `);
            if (!result[0][0]) {
                return undefined;
            }
            ;
            return yield this.mapFeedToDbVideo(result[0][0]);
        });
    }
}
exports.VideoDB = VideoDB;
