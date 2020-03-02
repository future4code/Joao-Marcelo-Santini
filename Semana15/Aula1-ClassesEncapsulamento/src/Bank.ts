import { JSONFileManager } from "./JSONFileManager"
import { UserAccount } from "./UserAccount"

const fileManager = new JSONFileManager()

const user: UserAccount = new UserAccount(
    process.argv[2], 
    Number(process.argv[3]), 
    process.argv[4]
)

fileManager.salverContaEmJSON(user,)

