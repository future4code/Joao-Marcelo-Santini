import { v4 } from "uuid";
import { ProductDB } from "../../data/productDatabase";
import { Product } from "../entities/products";


export class RegisterProductUC {
    constructor(private db: ProductDB) { }

    public async execute(input: RegisterProductUCInput): Promise<RegisterProductUCOutput> {
        try {
            const productId = v4();

            const newProduct = new Product(productId, input.name, input.photo, input.value)

            await this.db.registerProduct(newProduct)
                return{
                    message: "Produto Cadastrado!"
                }

        } catch (err) {
            throw new Error(err.message)
        }
    };
};


export interface RegisterProductUCInput {
    name: string,
    photo: string,
    value: string,
}

export interface RegisterProductUCOutput {
    message: string
}