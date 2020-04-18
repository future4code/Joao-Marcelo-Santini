"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const video_1 = require("./video");
class Feed extends video_1.Video {
    constructor(id, title, link, description, creationDate, user_id, name, userPhoto) {
        super(id, title, link, description, creationDate, user_id);
        this.name = name;
        this.userPhoto = userPhoto;
    }
    getName() {
        return this.name;
    }
    ;
    setName(name) {
        this.name = name;
    }
    ;
    getUserPhoto() {
        return this.userPhoto;
    }
    setUserPhoto(userPhoto) {
        this.userPhoto = userPhoto;
    }
}
exports.Feed = Feed;
