import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { UserDB } from "../../../data/userDatabase";
import { FollowUserUC } from "../../../business/usecases/user/followUser";


export const followUserEndpoint = async (req: Request, res: Response) => {
    try {
        const folowUserUC = new FollowUserUC(new UserDB());
        const jwtSecretKey: string = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }

        
        await folowUserUC.execute({
            adderFriendId: data.id,
            friendAddedId: req.body.friendAddedId

        });

        res.status(200).send({ message: "Usuario seguido com sucesso" });
    } catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};