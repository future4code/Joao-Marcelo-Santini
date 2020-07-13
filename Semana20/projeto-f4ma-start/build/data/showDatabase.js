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
const show_1 = require("../business/entities/show");
const band_1 = require("../business/entities/band");
class ShowDatabase extends baseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.showTableName = "shows";
        this.foreignBandTableName = "band";
    }
    fromDB(dbModel) {
        return (dbModel &&
            new show_1.Show(dbModel.id, show_1.toShowWeekDay(dbModel.week_day), dbModel.start_time, dbModel.end_time, dbModel.band_id));
    }
    getShow(week_day, start_time, end_time) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT *
      FROM ${this.showTableName}
      WHERE week_day = '${week_day}' AND start_time = '${start_time}' AND end_time='${end_time}'
    `);
            if (!result[0][0]) {
                return undefined;
            }
            return yield this.fromDB(result[0][0]);
        });
    }
    fromDBWithBand(dbModel) {
        return (dbModel &&
            new show_1.ShowWithBand(dbModel.id, show_1.toShowWeekDay(dbModel.week_day), dbModel.start_time, dbModel.end_time, new band_1.Band(dbModel.band_id, dbModel.name, dbModel.music_genre, dbModel.responsible)));
    }
    createShow(show) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connection.raw(`
      INSERT INTO ${this.showTableName} (id, week_day, start_time, end_time, band_id)
      VALUES(
        '${show.getId()}',
        '${show.getWeekDate()}',
        '${show.getStartTime()}',
        '${show.getEndTime()}',
        '${show.getBandId()}'
      )
  `);
        });
    }
    getShowWithBandByTimeRange(startTime, endTime, weekDay) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT s.*, b.name, b.music_genre, b.responsible FROM ${this.showTableName} s 
      LEFT JOIN ${this.foreignBandTableName} b ON b.id = s.band_id 
      WHERE 
        week_day = '${weekDay}' AND
        ((s.start_time <= ${startTime} AND s.end_time > ${startTime}) OR
        (s.start_time < ${endTime} AND s.end_time >= ${endTime}))
    `);
            return result[0].map(this.fromDBWithBand);
        });
    }
    getShowsByDay(day) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
      SELECT * FROM ${this.showTableName} s
      LEFT JOIN ${this.foreignBandTableName} b ON b.id = s.band_id
      WHERE s.week_day = '${day}'
    `);
            return result[0].map(this.fromDBWithBand);
        });
    }
}
exports.ShowDatabase = ShowDatabase;
