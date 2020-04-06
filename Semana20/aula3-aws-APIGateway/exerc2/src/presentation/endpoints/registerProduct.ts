import { Request, Response } from 'express';
import { RegisterProductUC } from '../../business/usecases/registerProduct';
import { ProductDB } from '../../data/productDatabase';


export const registerProductEndpoint = async (req: Request, res: Response) => {
    try{
        const registerUC = new RegisterProductUC( new ProductDB());
        const result = await registerUC.execute({
            name: req.body.name,
            photo: req.body.photo,
            value: req.body.value
        })

        res.status(200).send(result)

    } catch (err) {
        res.status(err.erroCode || 400).send({
            message: err.message
        })
    }
}