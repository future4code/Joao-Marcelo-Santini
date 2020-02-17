import { Transaction } from "./transaction"

export class UserAccount {
    private userName: string
    private userAge: number
    private userCPF: string
    private userBalance: number
    private transactions: Transaction[]


    constructor(name: string, age: number, cpf: string) {
        this.userName = name
        this.userAge = age
        this.userCPF = cpf
        this.userBalance = 0
        this.transactions = []
    }
}



