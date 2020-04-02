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
const posts_1 = require("../../entities/posts");
class PostUC {
    constructor(postDB) {
        this.postDB = postDB;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = uuid_1.v4();
                let type = posts_1.PostType.normal;
                if (input.type === "event") {
                    type = posts_1.PostType.event;
                }
                else if (input.type !== "normal") {
                    throw new Error("Tipo Invalido");
                }
                const post = new posts_1.Post(id, input.photo, input.description, new Date(), type, input.user_id);
                yield this.postDB.createPost(post);
                return {
                    message: "Post Criado!"
                };
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    ;
}
exports.PostUC = PostUC;
;
