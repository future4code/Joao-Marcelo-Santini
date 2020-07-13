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
class FeedOfVideosUC {
    constructor(videoGateway) {
        this.videoGateway = videoGateway;
        this.POST_PER_PAGE = 10;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const videos = yield this.videoGateway.getVideos();
            if (!videos) {
                throw new Error("Feed of videos are Empty");
            }
            return {
                feed: videos.map(video => {
                    return {
                        id: video.getId(),
                        title: video.getTitle(),
                        link: video.getLink(),
                        description: video.getDescription(),
                        creationDate: video.getCreationDate(),
                        user_id: video.getUser_id(),
                        name: video.getName(),
                        userPhoto: video.getUserPhoto()
                    };
                })
            };
        });
    }
}
exports.FeedOfVideosUC = FeedOfVideosUC;
var FeedOrderType;
(function (FeedOrderType) {
    FeedOrderType["ASC"] = "ASC";
    FeedOrderType["DESC"] = "DESC";
})(FeedOrderType = exports.FeedOrderType || (exports.FeedOrderType = {}));
