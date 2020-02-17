"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const UserAccount_1 = require("./UserAccount");
const fileManager = new JSONFileManager_1.JSONFileManager();
const user = new UserAccount_1.UserAccount(process.argv[2], Number(process.argv[3]), process.argv[4]);
fileManager.salverContaEmJSON(user);
//# sourceMappingURL=Bank.js.map