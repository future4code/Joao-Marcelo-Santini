import { Request, Response } from 'express'
import { FeedOfPostsUC, FeedOrderType } from "../../../business/usecases/feed/getFeedOfPosts"
import { FeedDB } from "../../../data/feedDatabase"
import * as jwt from "jsonwebtoken";


export const FeedOfPostsEndpoints = async (req: Request, res: Response) => {
    try {
        const feedOfPostsUC = new FeedOfPostsUC(new FeedDB());

        const jwtSecretKey: string = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }

        let orderType = FeedOrderType.ASC;

        if (req.body.orderType === "DESC") {
            orderType = FeedOrderType.DESC
        }
        const result = await feedOfPostsUC.execute({
            id: data.id,
            orderBy: req.body.orderBy,
            orderType,
            page: req.body.page,
        })

        res.status(200).send({
            feed: result
        })

    } catch (Error) {
        res.status(400).send({
            message: Error.message
        })
    }
}