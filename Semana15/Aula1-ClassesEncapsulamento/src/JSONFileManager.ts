import * as fs from 'fs'
import { UserAccount } from "./UserAccount"

export class JSONFileManager {
    salverContaEmJSON(account: UserAccount ) {
        fs.writeFileSync('accountData.json', JSON.stringify(account))
    }

    lerContasDeJSON(): UserAccount {
        const file = JSON.parse(fs.readFileSync('accountData.json').toString())
        
        return new UserAccount(file.userName, file.userAge, file.userCPF)
    }
}
