// Cuando usamos estilos modularizados son estilos únicos.
import { createContext, ReactElement, CSSProperties } from 'react';

import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import { IProduct } from '../interfaces/interfaces';
import { IProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface IProductCartProps {
	product: IProduct;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: CSSProperties;
}

export const ProductCart = ({
	product,
	children,
	className,
	style
}: IProductCartProps) => {
	const { counter, increaseBy } = useProduct(0);

	return (
		<Provider
			value={{
				counter,
				increaseBy,
				product,
			}}>
			<div 
				className={`${styles.productCard} ${className}`}
				style={style}
			>
					{children}
			</div>
		</Provider>
	);
};

export default ProductCart;
