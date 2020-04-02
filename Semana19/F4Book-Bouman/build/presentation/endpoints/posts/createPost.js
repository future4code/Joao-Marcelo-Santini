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
const post_1 = require("../../../business/usecases/post/post");
const postDatabase_1 = require("../../../data/postDatabase");
const jwt = __importStar(require("jsonwebtoken"));
exports.CreatePostEndpoint = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postUC = new post_1.PostUC(new postDatabase_1.PostDB());
        const jwtSecretKey = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization, jwtSecretKey);
        const result = yield postUC.execute({
            photo: req.body.photo,
            description: req.body.description,
            type: req.body.type,
            user_id: data.id
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.erroCode || 400).send({
            message: err.message
        });
    }
});
