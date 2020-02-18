import { Dish } from "./dish";
import { Dessert } from "./dessert";
import { SaltyDish } from "./saltydish";
import { Cashier } from "./cashier";
import { Manager } from "./manager";
import { Chef } from "./chef";

const dishes: Dish[] = [
    new Dessert("Bolo", 15, 10, [], 10, 10),

    new SaltyDish("Coxinha", 20, 10, [], 10)
];

console.log(dishes)


const employee: Cashier = new Cashier("johnny Cash", 10000)
const manager: Manager = new Manager("johnny depp", 20000)
const chef: Chef = new Chef("Johnny DeVito", 15000)

console.log(`${employee.getName()} diz: ${employee.sayJob()}`)

console.log(`${manager.getName()} diz: ${manager.sayJob()}`)

console.log(`${chef.getName()} diz: ${chef.sayJob()}`)


console.log(`Valor Total: ${employee.calculateBill([
    dishes[0],
    dishes[1]
])}`)