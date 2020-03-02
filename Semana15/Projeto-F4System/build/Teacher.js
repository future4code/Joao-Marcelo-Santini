"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Specialty;
(function (Specialty) {
    Specialty["HTML"] = "HTML";
    Specialty["CSS"] = "CSS";
    Specialty["JS"] = "JS";
    Specialty["React"] = "React";
    Specialty["Readux"] = "Redux";
    Specialty["Back"] = "Back";
    Specialty["OOP"] = "OOP";
})(Specialty || (Specialty = {}));
class Teacher {
    constructor(name, email, birthDate, specialty) {
        this.name = name;
        this.email = email;
        this.birthDate = birthDate;
        this.specialty = specialty;
    }
}
exports.Teacher = Teacher;
//# sourceMappingURL=Teacher.js.map