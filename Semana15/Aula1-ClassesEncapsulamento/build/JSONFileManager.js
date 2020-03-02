"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const UserAccount_1 = require("./UserAccount");
class JSONFileManager {
    salverContaEmJSON(account) {
        fs.writeFileSync('accountData.json', JSON.stringify(account));
    }
    lerContasDeJSON() {
        const file = JSON.parse(fs.readFileSync('accountData.json').toString());
        return new UserAccount_1.UserAccount(file.userName, file.userAge, file.userCPF);
    }
}
exports.JSONFileManager = JSONFileManager;
//# sourceMappingURL=JSONFileManager.js.map