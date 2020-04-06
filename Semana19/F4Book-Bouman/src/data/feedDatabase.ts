import { BaseDB } from "./baseDatabase";
import { FeedGateway } from "../business/gateways/feedGateway";
import { Feed } from "../business/entities/feed";


export class FeedDB extends BaseDB implements FeedGateway {
    private relationsTable = "users_relations";
    private userTableName = "users";
    private postsTableName = "posts";

    public async getPostsForFeed(id: string, orderBy: string, orderType: string, limit: number, offset: number): Promise<Feed[] | undefined> {
        const result = await this.connection.raw(`
            SELECT p.*, u.name
            FROM ${this.relationsTable} ur
            JOIN ${this.userTableName} u
            ON ur.friendAddedId = u.id
            JOIN ${this.postsTableName} p
            ON ur.friendAddedId = p.user_id
            WHERE adderFriendId = '${id}'
            ORDER BY ${orderBy} ${orderType}
            LIMIT ${limit} OFFSET ${offset};
        `)

        if (!result[0][0]) {
            return undefined;
        }

        return result[0].map((post: any) => {
            return new Feed(
                post.id,
                post.photo,
                post.description,
                post.create_date,
                post.type,
                post.user_id,
                post.name
            );
        });
    };

    public async getPostsForFeedByType(id: string, type: string, orderBy: string, orderType: string, limit: number, offset: number): Promise<Feed[] | undefined> {
        const result = await this.connection.raw(`
            SELECT p.*, u.name
            FROM ${this.relationsTable} ur
            JOIN ${this.userTableName} u
            ON ur.friendAddedId = u.id
            JOIN ${this.postsTableName} p
            ON ur.friendAddedId = p.user_id
            WHERE adderFriendId = '${id}' AND p.type = '${type}'
            ORDER BY ${orderBy} ${orderType}
            LIMIT ${limit} OFFSET ${offset};
        `);
        if (!result[0][0]) {
            return undefined;
        };

        return result[0].map((post: any) => {
                post.id,
                post.photo,
                post.description,
                post.create_date,
                post.type,
                post.user_id,
                post.name
        })

    }
}