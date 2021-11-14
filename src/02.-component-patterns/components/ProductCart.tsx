// Cuando usamos estilos modularizados son estilos únicos.
import { createContext } from 'react';

import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import {
	IProductCartProps,
	IProductContextProps,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCart = ({ product, children }: IProductCartProps) => {
	const { counter, increaseBy } = useProduct(0);

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};

export default ProductCart;
