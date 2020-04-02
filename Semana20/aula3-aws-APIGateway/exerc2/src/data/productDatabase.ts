import { BaseDB } from "./baseDatabase";
import { ProductGateway } from "../business/gateways/productGateway";
import { Product } from "../business/entities/products";

export class ProductDB extends BaseDB implements ProductGateway {
    private productTable = "produtos";

    private mapDBProductToProduct(input?: any): Product | undefined {
        return (
            input && new Product(
                input.id,
                input.name,
                input.photo,
                input.value
            )
        )
    };

    public async registerProduct(product: Product): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.productTable} (id, name, photo, value) VALUES (
                '${product.getId()}',
                '${product.getName()}',
                '${product.getPhoto()}',
                '${product.getValue()}'
            )
        `)
    }

}