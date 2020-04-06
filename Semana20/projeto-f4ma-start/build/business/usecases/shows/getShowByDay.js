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
class GetShowsByDayUC {
    constructor(showGateway) {
        this.showGateway = showGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const show = yield this.showGateway.getShowsByDay(input.week_day);
            if (!show) {
                throw new Error("Não pussui shows!");
            }
            return {
                shows: show.map(band => {
                    return {
                        id: band.getBandId(),
                        week_day: band.getWeekDate(),
                        start_time: band.getStartTime(),
                        end_time: band.getEndTime(),
                        band_id: band.getBandId()
                    };
                })
            };
        });
    }
}
exports.GetShowsByDayUC = GetShowsByDayUC;
