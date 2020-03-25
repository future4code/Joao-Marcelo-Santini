import { Request, Response } from 'express'
import { PostUC } from '../../../business/usecases/post/post';
import { PostDB } from '../../../data/postDatabase';
import * as jwt from "jsonwebtoken";


export const CreatePostEndpoint  = async (req: Request, res: Response) => {
    try {
        const postUC = new PostUC (new PostDB());
       
        const jwtSecretKey: string = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }
       
        const result = await postUC.execute({
           photo: req.body.photo,
           description: req.body.description,
           type: req.body.type,
           user_id: data.id

        })

        res.status(200).send(result)

    } catch (err) {
        res.status(err.erroCode || 400).send({
            message: err.message
        });
    }
};