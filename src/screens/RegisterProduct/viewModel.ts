import { Product } from "../../models/Product";
import { api } from "../../services/api";

export interface IViewModel {
    submitRegisteredProductValidation(product: Product)
    onFailureRegisterProduct: OnFailureRegisterProduct
    onSuccessRegisterProduct: OnSuccessRegisterProduct
    updatedPrice(price: string): number
}

type OnFailureRegisterProduct = (message: string) => void
type OnSuccessRegisterProduct = (message: string) => void

export class ViewModel implements IViewModel {

    onFailureRegisterProduct: OnFailureRegisterProduct
    onSuccessRegisterProduct: OnSuccessRegisterProduct

    submitRegisteredProductValidation(product: Product) {
        if (product.ean, product.name, product.price) {
            this.registerProduct(product)
            this.onSuccessRegisterProduct('Produto registrado')
        } else {
            this.onFailureRegisterProduct('O preço precisa ser registrado!')
        }
    }

    updatedPrice(price: string): number {
        return
    }

    private async registerProduct(data: Product): Promise<Product> {
        let res = await api.post('/products', data)
        return res.data
    }
}