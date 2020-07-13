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
class GetBandInfoUC {
    constructor(bandGateway) {
        this.bandGateway = bandGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let band;
            if (input.id) {
                band = yield this.bandGateway.getBandById(input.id);
            }
            else if (input.name) {
                band = yield this.bandGateway.getBandByName(input.name);
            }
            if (!band) {
                throw new Error("Banda não encontrada");
            }
            return {
                id: band.getId(),
                name: band.getName(),
                music_genre: band.getMusicGenre(),
                responsible: band.getResponsible()
            };
        });
    }
    ;
}
exports.GetBandInfoUC = GetBandInfoUC;
