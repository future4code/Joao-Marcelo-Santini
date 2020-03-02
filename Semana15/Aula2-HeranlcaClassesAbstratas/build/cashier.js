"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = require("./employee");
class Cashier extends employee_1.Employee {
    sayJob() {
        return "Eu sou o caixa!";
    }
    calculateBill(bill) {
        let sum = 0;
        bill.forEach((dish) => {
            sum += dish.getPrice();
        });
        return sum;
    }
}
exports.Cashier = Cashier;
//# sourceMappingURL=cashier.js.map