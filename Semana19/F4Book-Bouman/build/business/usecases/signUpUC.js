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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const users_1 = require("../entities/users");
const bcrypt = __importStar(require("bcrypt"));
class SignUpUC {
    constructor(db) {
        this.db = db;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = uuid_1.v4();
                if (input.password.length < 6) {
                    throw new Error("Password precisa de no mínimo de 6 characteres.");
                }
                else {
                    const encryPassword = yield bcrypt.hash(input.password, 10);
                    const newUser = new users_1.User(userId, input.email, encryPassword);
                    yield this.db.createUser(newUser);
                    return {
                        message: "Usuário criado com sucesso."
                    };
                }
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.SignUpUC = SignUpUC;
;
