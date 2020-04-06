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
class FeedOfPostsByTypeUC {
    constructor(feedGateway) {
        this.feedGateway = feedGateway;
        this.POST_PET_PAGE = 10;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let orderBy = "p.create_date";
            if (input.orderBy === "p.create_date" || input.orderBy === "p.description") {
                orderBy = input.orderBy;
            }
            else if (input.orderBy !== undefined) {
                throw new Error("Order de busca Invalida!");
            }
            let orderType = FeedOrderType.ASC;
            if (input.orderType === "DESC") {
                orderType = FeedOrderType.DESC;
            }
            else if (input.orderType === "ASC") {
                orderType = FeedOrderType.ASC;
            }
            else if (input.orderType !== undefined) {
                throw new Error("Order invalida!");
            }
            let page = input.page >= 1 ? input.page : 1;
            const offset = this.POST_PET_PAGE * (page - 1);
            const posts = yield this.feedGateway.getPostsForFeedByType(input.id, input.type, orderBy, orderType, this.POST_PET_PAGE, offset);
            if (!posts) {
                throw new Error("Feed está vazio!");
            }
            ;
            return {
                posts: posts.map(post => {
                    return {
                        id: post.getId(),
                        photo: post.getPhoto(),
                        description: post.getDescription(),
                        create_date: post.getCreationDate(),
                        type: post.getType(),
                        user_id: post.getUserId(),
                        name: post.getName()
                    };
                })
            };
        });
    }
}
exports.FeedOfPostsByTypeUC = FeedOfPostsByTypeUC;
var FeedOrderType;
(function (FeedOrderType) {
    FeedOrderType["ASC"] = "ASC";
    FeedOrderType["DESC"] = "DESC";
})(FeedOrderType = exports.FeedOrderType || (exports.FeedOrderType = {}));
