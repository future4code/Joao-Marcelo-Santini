"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerBand_1 = require("./endpoints/bands/registerBand");
const getBandInfo_1 = require("./endpoints/bands/getBandInfo");
const registerShow_1 = require("./endpoints/shows/registerShow");
const getShowByDay_1 = require("./endpoints/shows/getShowByDay");
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
app.post('/registerBand', registerBand_1.registerBandEndpoint);
app.get('/band', getBandInfo_1.getBandInfoEndpoint);
app.post('/registerShow', registerShow_1.registerShowEndPoint);
app.get('/getShows', getShowByDay_1.GetShowsByDayEndpoint);
exports.default = app;
