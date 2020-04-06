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
const registerShow_1 = require("../../../business/usecases/shows/registerShow");
exports.registerShowEndPoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const registerShowUC = new registerShow_1.RegisterShowUC(new showDatabase_1.ShowDatabase());
        const result = yield registerShowUC.execute({
            week_day: req.body.week_day,
            start_time: req.body.start_time,
            end_time: req.body.end_time,
            band_id: req.body.band_id
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
});
