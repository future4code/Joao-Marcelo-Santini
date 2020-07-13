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
const getVideoDetail_1 = require("../../../business/usecase/video/getVideoDetail");
const videoDatabase_1 = require("../../../data/videoDatabase");
exports.GetVideoDetailEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getVideoDetailuc = new getVideoDetail_1.GetVideoDetailUC(new videoDatabase_1.VideoDB());
        const result = yield getVideoDetailuc.execute({
            id: req.params.id
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(400).send({
            message: err.message
        });
    }
});
