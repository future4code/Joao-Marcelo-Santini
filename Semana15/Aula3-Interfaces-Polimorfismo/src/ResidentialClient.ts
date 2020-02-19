import { Residence } from "./residence";
import { Client } from "./client";

export class ResidentialClient extends Residence implements Client {
    clientName: string
    clientNumber: number
    consumedEnergy: number

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, name: string, cpf: string, cep: string) {
        super(
            name,
            cpf,
            cep,
        )

        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }
    calculateBill(): number {
       return this.consumedEnergy * 0.75;
    }
}