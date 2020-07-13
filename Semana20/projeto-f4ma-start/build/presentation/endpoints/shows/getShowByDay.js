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
const showDatabase_1 = require("../../../data/showDatabase");
const getShowByDay_1 = require("../../../business/usecases/shows/getShowByDay");
exports.GetShowsByDayEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getShowsByDay = new getShowByDay_1.GetShowsByDayUC(new showDatabase_1.ShowDatabase());
        const result = yield getShowsByDay.execute({
            week_day: req.query.week_day
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
