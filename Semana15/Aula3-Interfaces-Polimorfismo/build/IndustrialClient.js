"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const industry_1 = require("./industry");
class IndustrialClient extends industry_1.Industry {
    constructor(clientName, clientNumber, consumedEnergy, industryName, industryNumber, cep) {
        super(industryName, industryNumber, cep);
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.consumedEnergy = consumedEnergy;
    }
    calculateBill() {
        return this.consumedEnergy * 0.45 + 10000;
    }
}
exports.IndustrialClient = IndustrialClient;
//# sourceMappingURL=IndustrialClient.js.map