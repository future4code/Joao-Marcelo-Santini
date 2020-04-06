import { Request, Response } from "express";
import { UnfollowUserUC } from "../../../business/usecases/user/UnfollowUser";
import { UserDB } from "../../../data/userDatabase";
import * as jwt from "jsonwebtoken";


export const unfollowUserEndpoint = async ( req: Request, res: Response) => {
    try{
        const unfollowUserUc = new UnfollowUserUC(new UserDB());
        const jwtSecretKey: string = process.env.SECRET || "";
        const data = jwt.verify(req.headers.authorization as string, jwtSecretKey) as { id: string }

        await unfollowUserUc.execute({
            adderFriendId: data.id,
            friendAddedId: req.body.friendAddedId
        });

        res.status(200).send({message:"Usuário não é mais seguido."})
    }catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
    
}