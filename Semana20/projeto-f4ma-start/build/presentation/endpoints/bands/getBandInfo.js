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
const getBandInfo_1 = require("../../../business/usecases/bands/getBandInfo");
const bandDatabase_1 = require("../../../data/bandDatabase");
exports.getBandInfoEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getBandInfoUC = new getBandInfo_1.GetBandInfoUC(new bandDatabase_1.BandDatabase());
        const result = yield getBandInfoUC.execute({
            id: req.query.id,
            name: req.query.name
        });
        res.status(200).send({ band: result });
    }
    catch (err) {
        res.status(err.console.errorCode || 400).send({
            message: err.message
        });
    }
});
