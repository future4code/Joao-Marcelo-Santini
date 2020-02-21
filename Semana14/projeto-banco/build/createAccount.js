"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const fs_1 = require("fs");
moment.locale('pt-br');
const userName = process.argv[2];
const userBirth = moment(process.argv[3], "DD/MM/YYYY");
const userCPF = process.argv[4];
const userBalance = 0;
const accountPath = ('../accountData.json');
const getAcountList = () => __awaiter(void 0, void 0, void 0, function* () {
    const readAccountList = new Promise((resolve, rejects) => {
        fs_1.readFile(accountPath, (err, data) => {
            if (err) {
                rejects(err);
                return;
            }
            resolve(data.toString());
        });
    });
    const readAccountListString = yield readAccountList;
    const readAccountObject = JSON.parse(readAccountListString);
    readAccountObject.accountList.push({
        name: userName,
        birth: userBirth.format("DD/MM/YYYY"),
        cpf: userCPF,
        balance: userBalance,
        transactionList: []
    });
    const data = JSON.stringify(readAccountObject, null, 2);
    const creatingAccount = new Promise((resolve, rejects) => {
        fs_1.writeFile(accountPath, data, (err) => {
            if (err) {
                rejects(err);
                return;
            }
            resolve(data.toString());
            return creatingAccount;
        });
    });
    return readAccountObject;
});
getAcountList().then((readAccountObject) => console.log(readAccountObject));
//# sourceMappingURL=createAccount.js.map