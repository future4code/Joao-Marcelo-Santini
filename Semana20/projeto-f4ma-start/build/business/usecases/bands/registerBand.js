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
const uuid_1 = require("uuid");
const band_1 = require("../../entities/band");
class RegisterBandUC {
    constructor(bandDB) {
        this.bandDB = bandDB;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const bandId = uuid_1.v4();
                if (!input.name || !input.music_genre || !input.responsible) {
                    throw new Error("Possuie valores vazios.");
                }
                else {
                    const newBand = new band_1.Band(bandId, input.name, input.music_genre, input.responsible);
                    yield this.bandDB.createBand(newBand);
                    return {
                        message: "Banda Cadastrada com sucesso!"
                    };
                }
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.RegisterBandUC = RegisterBandUC;
