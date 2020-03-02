import { Employee } from "./employee";
import { Dish } from "./dish";
import { Cashier } from "./cashier"


export class Manager extends Cashier {
    sayJob() {
        return "Eu sou o Gerente!"
    }

}
