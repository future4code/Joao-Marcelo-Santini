import { Request, Response, response } from 'express'
import { SingUpUC } from '../../../business/usecases/user/singUp'
import { UserDB } from '../../../data/userDatabase'

export const singUpEndpoint = async (req: Request, res: Response) => {
    try {
        const singUpUC = new SingUpUC(new UserDB());
        const result = await singUpUC.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(err.erroCode || 400).send({
            message: err.message
        });
    }
};