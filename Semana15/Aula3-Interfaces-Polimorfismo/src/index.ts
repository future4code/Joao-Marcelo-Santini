import { ResidentialClient } from "./ResidentialClient";
import { CommercialClient } from "./CommercialClient";
import { IndustrialClient } from "./IndustrialClient";
import { ClientManager } from "./ClientManager"


//Instancias para  clienteResidencial

const brain: ResidentialClient = new ResidentialClient
    ("Brain", 1, 230, "Brain", "111.111.111", "16430-000")

const joao: ResidentialClient = new ResidentialClient
    ("João", 2, 200, "João", "222.222.222", "1500-000")


//Instancias para  clienteComercial

const escolaF4: CommercialClient = new CommercialClient
    ("AstroDev", 3, 400, "Future4", "15.400.500/0001-06", "1500-030")

const lojinhaDoBrian: CommercialClient = new CommercialClient
    ("Brian", 4, 550, "LojinhaDoBrian", "14.422.279/0001-06", "1300-555")


//Instancia para clientreIndustrial

const cocaCola: IndustrialClient = new IndustrialClient
    ("Coca-Cola", 5, 5000, "Coca-Cola", "007-007", "15000-000")

const octavios: IndustrialClient = new IndustrialClient
    ("Dr Octopus", 6, 999999, "Octavios", "0070-507", "13655-000")


//Adiciona ao array client, e mostra ele com um console.log

const clientManager = new ClientManager()

clientManager.addClient(brain)
clientManager.addClient(joao)
clientManager.addClient(escolaF4)
clientManager.addClient(lojinhaDoBrian)
clientManager.addClient(cocaCola)
clientManager.addClient(octavios)

//console.log(clientManager)


clientManager.printClientBills();

clientManager.calculateAllIncome();