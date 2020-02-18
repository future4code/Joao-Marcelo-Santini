"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cashier_1 = require("./cashier");
class Manager extends cashier_1.Cashier {
    sayJob() {
        return "Eu sou o Gerente!";
    }
}
exports.Manager = Manager;
//# sourceMappingURL=manager.js.map