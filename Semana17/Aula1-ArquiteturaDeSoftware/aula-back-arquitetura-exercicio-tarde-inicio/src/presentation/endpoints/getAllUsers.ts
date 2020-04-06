import { GetAllUsersUC } from "../../business/usecase/getAllUsers";
import { Request, Response} from "express";
import { UserDB } from "../../data/userDataBase";

export const getAllUsersEndpoint = async ( req: Request, res: Response) => {
    try{
        const getAllUsersUC = new GetAllUsersUC(new UserDB());
        const result = await getAllUsersUC.execute();
        res.status(200).send(result);
    } catch(err){
        res.status(400).send({
            menssage: err.message
        });
    }
};