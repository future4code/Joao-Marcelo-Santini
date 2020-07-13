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
class UpdateVideoUC {
    constructor(videoGateway, authenticationGateway) {
        this.videoGateway = videoGateway;
        this.authenticationGateway = authenticationGateway;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userInfo = yield this.authenticationGateway.getUsersInfoFromToken(input.token);
            if (!userInfo) {
                throw new Error("You must be connected!");
            }
            const video = yield this.videoGateway.getVideoById(input.id);
            if (!video) {
                throw new Error("Video not found");
            }
            if (userInfo.id !== video.getUser_id()) {
                throw new Error("You cannot update this video!");
            }
            yield this.videoGateway.updateVideo(input.id, userInfo.id, input.title, input.description);
            return {
                message: `Video ${input.title} updated Successfully!`
            };
        });
    }
}
exports.UpdateVideoUC = UpdateVideoUC;
