import { Request, Response } from 'express'
import { FeedDB } from "../../../data/feedDatabase"
import * as jwt from "jsonwebtoken";
import { FeedOfPostsByTypeUC , FeedOrderType} from '../../../business/usecases/feed/getFeedOfPostsByType';


export const FeedOfPostsByTypeEndpoint = async (req: Request, res: Response) => {
    try {
        const feedOfPostsByTypeUC = new FeedOfPostsByTypeUC(new FeedDB());

        const jwtSecretKey: string = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }

        let orderType = FeedOrderType.ASC;

        if (req.body.orderType === "DESC") {
            orderType = FeedOrderType.DESC
        }
        const result = await feedOfPostsByTypeUC.execute({
            id: data.id,
            type: req.query.type,
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