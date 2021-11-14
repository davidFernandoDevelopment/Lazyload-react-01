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
            // if (!count) {
            // 	const { [product.id]: toDelete, ...rest } = oldShoppingCart;

            // 	return rest;
            // }

            // return {
            // 	...oldShoppingCart,
            // 	[product.id]: { ...product, count },
            // };
            const productInCart: ProductInCart = oldShoppingCart[product.id] || {
                ...product,
                count: 0,
            };

            if (Math.max(productInCart.count + count, 0)) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }

            const { [product.id]: toDelete, ...rest } = oldShoppingCart;

            return rest;
        });
        console.log('Function active: ', count, product);
    };

    return {
        shoppingCart,

        onProductCountChanges
    };
};