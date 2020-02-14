import * as moment from "moment";
import { readFile, writeFile, fstat } from "fs";
import { rejects } from "assert";

moment.locale('pt-br')

const userName: string = process.argv[2]
const userBirth: any = moment(process.argv[3], "DD/MM/YYYY")
const userCPF: string = process.argv[4]
const userBalance: number = 0


type account = {
    name: string,
    birth: string,
    cpf: string,
    balance: number,
    transactionList: []
}

type accountBody = {
    accountList: account[]
}
type transaction = {
    value: number,
    transactionDay: Date,
    description: string,
}



const accountPath: string = ('../accountData.json')

// Recebendo o json e transformando em Obj.

const getAcountList = async () => {
    const readAccountList: Promise<string> = new Promise((resolve, rejects) => {
        readFile(accountPath, (err: Error, data: Buffer) => {
            if (err) {
                rejects(err);
                return;
            }
            resolve(data.toString());
        })
    })

    const readAccountListString: string = await readAccountList
    const readAccountObject: accountBody = JSON.parse(readAccountListString)

    readAccountObject.accountList.push({
        name: userName,
        birth: userBirth.format("DD/MM/YYYY"),
        cpf: userCPF,
        balance: userBalance,
        transactionList: []
    })

    const data: string = JSON.stringify(readAccountObject, null, 2)
    const creatingAccount: Promise<string> = new Promise((resolve, rejects) => {
        writeFile(accountPath, data, (err) => {
            if (err) {
                rejects(err)
                return
            }
            resolve(data.toString())
            return creatingAccount
        })
    })

    return readAccountObject

}

getAcountList().then((readAccountObject: any) => console.log(readAccountObject))










//.......................................................

// const writeAccount = async () => {
//     writeFile('../accountData.json',JSON.stringify(accountForm), (err: Error)=>{
//         if(err){
//             console.log(err.message)
//         }else{
//             console.log("Cadastrado!")
//         }
//     })
// }

// writeAccount();