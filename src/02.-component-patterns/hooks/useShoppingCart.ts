import { useState } from 'react';
import { ProductInCart, IProduct } from '../interfaces/interfaces';



export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});

    const onProductCountChanges = ({
        count,
        product,
    }: {
        count: number;
        product: IProduct;
    }) => {
        console.log(count);
        setShoppingCart((oldShoppingCart) => {
            if (!count) {
                const { [product.id]: toDelete, ...rest } = oldShoppingCart;

                return rest;
            }

            return {
                ...oldShoppingCart,
                [product.id]: { ...product, count },
            };
        });
    };

    return {
        shoppingCart,

        onProductCountChanges
    };
};