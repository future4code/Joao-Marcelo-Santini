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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const feedDatabase_1 = require("../../../data/feedDatabase");
const jwt = __importStar(require("jsonwebtoken"));
const getFeedOfPostsByType_1 = require("../../../business/usecases/feed/getFeedOfPostsByType");
exports.FeedOfPostsByTypeEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedOfPostsByTypeUC = new getFeedOfPostsByType_1.FeedOfPostsByTypeUC(new feedDatabase_1.FeedDB());
        const jwtSecretKey = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization, jwtSecretKey);
        let orderType = getFeedOfPostsByType_1.FeedOrderType.ASC;
        if (req.body.orderType === "DESC") {
            orderType = getFeedOfPostsByType_1.FeedOrderType.DESC;
        }
        const result = yield feedOfPostsByTypeUC.execute({
            id: data.id,
            type: req.query.type,
            orderBy: req.body.orderBy,
            orderType,
            page: req.body.page,
        });
        res.status(200).send({
            feed: result
        });
    }
    catch (Error) {
        res.status(400).send({
            message: Error.message
        });
    }
});
