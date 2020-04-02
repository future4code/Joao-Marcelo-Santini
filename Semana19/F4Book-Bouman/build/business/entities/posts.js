"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, photo, description, create_date, type, user_id) {
        this.id = id;
        this.photo = photo;
        this.description = description;
        this.create_date = create_date;
        this.type = type;
        this.user_id = user_id;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getPhoto() {
        return this.photo;
    }
    setPhoto(photo) {
        this.photo = photo;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getCreationDate() {
        return this.create_date;
    }
    setCreationDate(creationDate) {
        this.create_date = creationDate;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getUserId() {
        return this.user_id;
    }
    setUserId(userId) {
        this.user_id = userId;
    }
}
exports.Post = Post;
var PostType;
(function (PostType) {
    PostType["normal"] = "normal";
    PostType["event"] = "event";
})(PostType = exports.PostType || (exports.PostType = {}));
