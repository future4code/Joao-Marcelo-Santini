"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Video {
    constructor(id, title, link, description, creationDate, user_id) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.description = description;
        this.creationDate = creationDate;
        this.user_id = user_id;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getLink() {
        return this.link;
    }
    setLink(link) {
        this.link = link;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getCreationDate() {
        return this.creationDate;
    }
    setCreationDate(creationDate) {
        this.creationDate = creationDate;
    }
    getUser_id() {
        return this.user_id;
    }
    setUser_id(user_id) {
        this.user_id = user_id;
    }
}
exports.Video = Video;
