"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
const FileManager_1 = require("./FileManager");
class NormalStudentCreator {
    create(name, email, birthDate) {
        this.saveStudent(new Student_1.Student(name, email, birthDate));
    }
    saveStudent(student) {
        const fileManager = new FileManager_1.FileManager("F4Class.json");
        const data = fileManager.readFile();
        data.student.push(student);
        fileManager.writeFile(data);
    }
}
exports.NormalStudentCreator = NormalStudentCreator;
//# sourceMappingURL=NormalStudentCreator.js.map