import { Post } from "../entities/posts";

export interface PostGateway {
    createPost(post:Post):Promise<void>;
}