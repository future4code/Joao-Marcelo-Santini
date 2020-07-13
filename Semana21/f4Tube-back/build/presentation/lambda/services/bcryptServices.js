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
class BcryptService {
    // private static BCRYPT_SALTS_ROUND = 15;
    encrypt(word) {
        return __awaiter(this, void 0, void 0, function* () {
            // const generatedSalt = await bcrypt.genSalt(
            //   BcryptService.BCRYPT_SALTS_ROUND
            // );
            // const result = await bcrypt.hash(word, generatedSalt);
            // return result;
            return word;
        });
    }
    compare(word, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            // return bcrypt.compare(word, hash);
            return word === hash;
        });
    }
}
exports.BcryptService = BcryptService;
