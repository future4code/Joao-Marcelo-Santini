"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FileManager_1 = require("./FileManager");
const Posts_1 = require("./Posts");
class NormalPostCreator {
    create(text, author) {
        this.validateInput(text, author);
        this.savePost(new Posts_1.Post(text, author, new Date()));
    }
    savePost(post) {
        const fileManager = new FileManager_1.FileManager("posts.json");
        const data = fileManager.readFile();
        data.posts.push(post);
        fileManager.writeFile(data);
    }
    validateInput(text, author) {
        if (!text || !author) {
            throw new Error("Erro!");
        }
    }
}
exports.NormalPostCreator = NormalPostCreator;
//# sourceMappingURL=NormalPostCreator.js.map