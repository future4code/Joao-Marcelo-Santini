"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dessert_1 = require("./dessert");
const saltydish_1 = require("./saltydish");
const cashier_1 = require("./cashier");
const manager_1 = require("./manager");
const chef_1 = require("./chef");
const dishes = [
    new dessert_1.Dessert("Bolo", 15, 10, [], 10, 10),
    new saltydish_1.SaltyDish("Coxinha", 20, 10, [], 10)
];
console.log(dishes);
const employee = new cashier_1.Cashier("johnny Cash", 10000);
const manager = new manager_1.Manager("johnny depp", 20000);
const chef = new chef_1.Chef("Johnny DeVito", 15000);
console.log(`${employee.getName()} diz: ${employee.sayJob()}`);
console.log(`${manager.getName()} diz: ${manager.sayJob()}`);
console.log(`${chef.getName()} diz: ${chef.sayJob()}`);
console.log(`Valor Total: ${employee.calculateBill([
    dishes[0],
    dishes[1]
])}`);
//# sourceMappingURL=index.js.map