"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class FileManager {
    constructor(fileName) {
        this.fileName = fileName;
    }
    readFile() {
        const fileContent = fs_1.readFileSync(this.fileName);
        return JSON.parse(fileContent.toString());
    }
    writeFile(objectToWrite) {
        fs_1.writeFileSync(this.fileName, JSON.stringify(objectToWrite, null, 2));
    }
}
exports.FileManager = FileManager;
//# sourceMappingURL=FileManager.js.map