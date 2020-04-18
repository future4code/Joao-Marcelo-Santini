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
const video_1 = require("../../entites/video");
class CreateVideoUC {
    constructor(videoGateway, authenticationGateway) {
        this.videoGateway = videoGateway;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingVideo = yield this.videoGateway.checkVideoByLink(input.link);
            if (existingVideo) {
                throw new Error("Already have a vídeo with this link");
            }
            const id = uuid_1.v4();
            const userInfo = this.authenticationGateway.getUsersInfoFromToken(input.token);
            if (!userInfo) {
                throw new Error("User info is wrong");
            }
            const video = new video_1.Video(id, input.title, input.link, input.description, new Date(), userInfo.id);
            yield this.videoGateway.createVideo(video);
            return {
                message: "Video created Successfully!"
            };
        });
    }
}
exports.CreateVideoUC = CreateVideoUC;
