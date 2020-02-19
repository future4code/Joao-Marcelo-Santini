import { Client } from "./client";

// Criando um array de client.

export class ClientManager {
    public clients: Client[]

    constructor() {
        this.clients = []
    }

    // adicionando clients no array

    public addClient(client: Client): void {
        this.clients.push(client)
    }

    // Pegando quantidade de clientes

    public getClientsQuantity() {
        console.log("A Quantidade de clientes é: ", this.clients.length)
    }

    // Função de mostrar clientes

    public printClientBills() {
        console.log("Código | Nome | Valor")
        this.clients.forEach(client => {
            console.log(
                client.clientNumber +
                " - " +
                client.clientName +
                " - " +
               "R$",client.calculateBill()
            )
        })
    }

    //Calculando valor total a receber

    public calculateAllIncome() {
        let total = 0;
        this.clients.forEach(eachClient => {
            total += eachClient.calculateBill();
        })
        console.log("Total a receber: R$",total);
    }
}