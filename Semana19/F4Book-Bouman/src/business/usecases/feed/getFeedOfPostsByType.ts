import { FeedGateway } from "../../gateways/feedGateway";


export class FeedOfPostsByTypeUC {
    constructor(
        private feedGateway: FeedGateway
    ) { }

    private POST_PET_PAGE = 10;

    public async execute(input: FeedOfPostsByTypeUCInput): Promise<FeedOfPostsByTypeUCOutput> {

        let orderBy = "p.create_date";

        if (input.orderBy === "p.create_date" || input.orderBy === "p.description") {
            orderBy = input.orderBy;
        } else if (input.orderBy !== undefined) {
            throw new Error("Order de busca Invalida!")
        }

        let orderType = FeedOrderType.ASC;
        if (input.orderType === "DESC") {
            orderType = FeedOrderType.DESC
        } else if (input.orderType === "ASC") {
            orderType = FeedOrderType.ASC
        } else if (input.orderType !== undefined) {
            throw new Error("Order invalida!")
        }

        let page = input.page >= 1 ? input.page : 1;
        const offset = this.POST_PET_PAGE * (page - 1)

        const posts = await this.feedGateway.getPostsForFeedByType(input.id, input.type, orderBy, orderType, this.POST_PET_PAGE, offset);

        if (!posts) {
            throw new Error("Feed está vazio!");
        };

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
        }

    }
}

export interface FeedOfPostsByTypeUCInput {
    id: string;
    type: string;
    orderBy: string;
    orderType: string;
    page: number;
}

export interface FeedOfPostsByTypeUCOutput {
    posts: FeedOfPostsByTypeUCOutputPost[];
}

export interface FeedOfPostsByTypeUCOutputPost {
    id: string;
    photo: string;
    description: string;
    create_date: Date;
    type: string;
    user_id: string;
    name: string;
}

export enum FeedOrderType {
    ASC = "ASC",
    DESC = "DESC"
}