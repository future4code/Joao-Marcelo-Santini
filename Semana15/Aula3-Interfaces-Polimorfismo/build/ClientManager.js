"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClientManager {
    constructor() {
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    getClientsQuantity() {
        console.log("A Quantidade de clientes é: ", this.clients.length);
    }
    printClientBills() {
        console.log("Código | Nome | Valor");
        this.clients.forEach(client => {
            console.log(client.clientNumber +
                " - " +
                client.clientName +
                " - " +
                "R$", client.calculateBill());
        });
    }
    calculateAllIncome() {
        let total = 0;
        this.clients.forEach(eachClient => {
            total += eachClient.calculateBill();
        });
        console.log("Total a receber: R$", total);
    }
}
exports.ClientManager = ClientManager;
//# sourceMappingURL=ClientManager.js.map