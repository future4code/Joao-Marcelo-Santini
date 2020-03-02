"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mission_1 = require("./Mission");
class MobileMission extends Mission_1.Mission {
    constructor(numberClass, startDate, endDate) {
        super(startDate, endDate);
        this.numberClass = numberClass;
    }
}
exports.MobileMission = MobileMission;
//# sourceMappingURL=MobileMission.js.map