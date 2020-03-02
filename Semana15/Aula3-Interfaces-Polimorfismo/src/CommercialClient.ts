import { Commerce } from "./commerce";
import { Client } from "./client";

export class CommercialClient extends Commerce implements Client {
    clientName: string
    clientNumber: number
    consumedEnergy: number

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, name: string, cnpj: string, cep: string) {
        super(
            name,
            cnpj,
            cep,
        )
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }
    calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }
}