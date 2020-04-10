import { Request, Response} from "express";
import { SignUpUC } from "../../../business/usecases/user/signUp";
import { UserDatabase } from "../../../data/userDatabase";


export const signUpEndpoint = async ( req: Request, res: Response) => {
    try {
        const signUpUC = new SignUpUC(new UserDatabase());

        const result = await signUpUC.execute({
            
            name: req.body.name,
            email: req.body.email,
            birthdate: req.body.birthdate,
            password: req.body.password,
            photo: req.body.photo
        });

        res.status(200).send(result);
    } catch (err) {
        res.status(400).send({
            message: err.message,
            ...err
        })
    }
};