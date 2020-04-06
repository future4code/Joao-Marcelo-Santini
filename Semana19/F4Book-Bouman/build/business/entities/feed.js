"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = require("./posts");
class Feed extends posts_1.Post {
    constructor(id, photo, description, create_date, type, user_id, name) {
        super(id, photo, description, create_date, type, user_id);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
exports.Feed = Feed;
