export class Transaction {
    private userCPF: string
    private value: number
    private description: string
    

    constructor(cpf: string, value: number, description: string) {
        this.userCPF = cpf
        this.value = value
        this.description = description
       
    }
}

