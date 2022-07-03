import { createContext, ReactNode, useState } from 'react';
import { Product } from '../../models/Product';


interface ProductProviderProps {
    children: ReactNode
}

interface ProductContextData {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
}

export const ProductContext = createContext<ProductContextData>(
    {} as ProductContextData
)

export function ProductProvider({ children }: ProductProviderProps) {

    const [product, setProduct] = useState<Product>()

    return (
        <ProductContext.Provider value={{ product, setProduct }}>
            {children}
        </ProductContext.Provider >
    )
}