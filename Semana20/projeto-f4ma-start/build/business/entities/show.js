"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Show {
    constructor(id, week_day, start_time, end_time, band_id) {
        this.id = id;
        this.week_day = week_day;
        this.start_time = start_time;
        this.end_time = end_time;
        this.band_id = band_id;
    }
    getId() {
        return this.id;
    }
    getWeekDate() {
        return this.week_day;
    }
    getStartTime() {
        return this.start_time;
    }
    getEndTime() {
        return this.end_time;
    }
    getBandId() {
        return this.band_id;
    }
}
exports.Show = Show;
class ShowWithBand extends Show {
    constructor(id, week_day, start_time, end_time, band) {
        super(id, week_day, start_time, end_time, band.getId());
        this.band = band;
    }
    getBand() {
        return this.band;
    }
}
exports.ShowWithBand = ShowWithBand;
var ShowWeekDay;
(function (ShowWeekDay) {
    ShowWeekDay["FRIDAY"] = "FRIDAY";
    ShowWeekDay["SATURDAY"] = "SATURDAY";
    ShowWeekDay["SUNDAY"] = "SUNDAY";
})(ShowWeekDay = exports.ShowWeekDay || (exports.ShowWeekDay = {}));
exports.toShowWeekDay = (input) => {
    switch (input.toUpperCase()) {
        case "FRIDAY":
            return ShowWeekDay.FRIDAY;
        case "SATURDAY":
            return ShowWeekDay.SATURDAY;
        case "SUNDAY":
            return ShowWeekDay.SUNDAY;
        default:
            throw new Error("Invalid Week Day");
    }
};
