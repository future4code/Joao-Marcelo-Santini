import { BaseDB } from "./baseDatabase";
import { PostGateway } from "../business/gateways/postGateway";
import { Post } from "../business/entities/posts";

export class PostDB extends BaseDB implements PostGateway {
    private postTable = "posts";

    private mapDBUserToUser(input?: any): Post | undefined {
        return (
            input && new Post(
                input.id,
                input.photo,
                input.description,
                input.create_date,
                input.type,
                input.user_id
            )
        )
    };

    private mapDateToDbDate(input: Date): string {
        const year = input.getFullYear();
        const month = input.getMonth() + 1;
        const date = input.getDate();
        const hour = input.getHours();
        const minute = input.getMinutes();
        const second = input.getSeconds();
        return `${year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second}`;
    }


    public async createPost(post: Post): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.postTable}(id, photo, description, create_date,type,user_id)
            VALUES (
                '${post.getId()}',
                '${post.getPhoto()}',
                '${post.getDescription()}',
                STR_TO_DATE('${this.mapDateToDbDate(post.getCreationDate())}', '%Y-%m-%d %H:%i:%s'),
                '${post.getType()}',
                '${post.getUserId()}'
            )
        `)
    }


}