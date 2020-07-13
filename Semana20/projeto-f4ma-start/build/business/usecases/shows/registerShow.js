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
const show_1 = require("../../entities/show");
class RegisterShowUC {
    constructor(showGateway) {
        this.showGateway = showGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const showID = uuid_1.v4();
                if (!input.week_day || !input.start_time || !input.end_time || !input.band_id) {
                    throw new Error("Possui valores invalidos.");
                }
                let weekDay = show_1.ShowWeekDay.FRIDAY;
                if (input.week_day === "SATURDAY") {
                    weekDay = show_1.ShowWeekDay.SATURDAY;
                }
                else if (input.week_day === "SUNDAY") {
                    weekDay = show_1.ShowWeekDay.SUNDAY;
                }
                else if (input.week_day !== "FRIDAY") {
                    throw new Error("Dia da semana invalido!");
                }
                else if (input.start_time < 8 || input.start_time > 23) {
                    throw new Error("Horario inicial invalido.");
                }
                else if (input.end_time > 23 || input.end_time < 8) {
                    throw new Error("Horario final invalido.");
                }
                else if (input.start_time % 1 !== 0) {
                    throw new Error("Horario inicial tem que ser inteiro");
                }
                else if (input.end_time % 1 !== 0) {
                    throw new Error("Horario final tem que ser inteiro");
                }
                const showTime = yield this.showGateway.getShow(weekDay, input.start_time, input.end_time);
                if (showTime) {
                    throw new Error("Horario indisponivel!");
                }
                const show = new show_1.Show(showID, weekDay, input.start_time, input.end_time, input.band_id);
                yield this.showGateway.createShow(show);
                return {
                    message: "Show Criado com sucesso!"
                };
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.RegisterShowUC = RegisterShowUC;
