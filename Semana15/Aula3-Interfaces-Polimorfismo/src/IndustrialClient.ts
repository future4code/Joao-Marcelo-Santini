import { Industry } from "./industry";
import { Client } from "./client";

export class IndustrialClient extends Industry implements Client {
    clientName: string
    clientNumber: number
    consumedEnergy: number

    constructor(clientName: string, clientNumber: number, consumedEnergy: number, industryName: string, industryNumber: string, cep: string) {
        super(
            industryName,
            industryNumber,
            cep,
        )
        this.clientName = clientName
        this.clientNumber = clientNumber
        this.consumedEnergy = consumedEnergy
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + 10000;
    }
}