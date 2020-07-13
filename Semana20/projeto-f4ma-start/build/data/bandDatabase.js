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
const baseDatabase_1 = require("./baseDatabase");
const band_1 = require("../business/entities/band");
class BandDatabase extends baseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.bandTableName = "band";
    }
    fromDB(dbModel) {
        return (dbModel &&
            new band_1.Band(dbModel.id, dbModel.name, dbModel.music_genre, dbModel.responsible));
    }
    createBand(band) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
      INSERT INTO ${this.bandTableName} (id, name, music_genre, responsible)
      VALUES(
        '${band.getId()}',
        '${band.getName()}',
        '${band.getMusicGenre()}',
        '${band.getResponsible()}'
      )
    `);
        });
    }
    getBandById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE id = '${id}'
    `);
            return this.fromDB(result[0][0]);
        });
    }
    getBandByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.bandTableName}
      WHERE name LIKE '%${name}%'
    `);
            return this.fromDB(result[0][0]);
        });
    }
}
exports.BandDatabase = BandDatabase;
