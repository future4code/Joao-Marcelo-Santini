"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mission_1 = require("./Mission");
const FileManager_1 = require("./FileManager");
class WebMission extends Mission_1.Mission {
    constructor(namePatrono, startDate, endDate) {
        super(startDate, endDate);
        this.namePatrono = namePatrono;
    }
    createMission(namePatrono, startDate, endDate) {
        this.saveMission(new WebMission(namePatrono, startDate, endDate));
    }
    saveMission(mission) {
        const fileManager = new FileManager_1.FileManager("F4Class.json");
        const data = fileManager.readFile();
        data.mission.push(mission);
        fileManager.writeFile(data);
    }
}
exports.WebMission = WebMission;
//# sourceMappingURL=WebMisson.js.map