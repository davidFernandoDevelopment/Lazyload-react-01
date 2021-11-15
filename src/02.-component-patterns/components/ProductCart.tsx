// Cuando usamos estilos modularizados son estilos únicos.
import { createContext, CSSProperties } from 'react';

import styles from '../styles/styles.module.css';

import { useProduct } from '../hooks/useProduct';
import {
	IProduct,
	IOChangeArgs,
	InitialValues,
} from '../interfaces/interfaces';
import {
	IProductContextProps,
	ProductCartHandlers,
} from '../interfaces/interfaces';

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: IProduct;
	// children?: ReactElement | ReactElement[];
	children: (args: ProductCartHandlers) => JSX.Element;
	className?: string;
	style?: CSSProperties;
	onChange?: (args: IOChangeArgs) => void;
	value?: number;
	initialValue?: InitialValues;
}

export const ProductCart = ({
	product,
	children,
	className,
	style,
	onChange,
	value,
	initialValue,
}: Props) => {
	const { counter, maxCount, isMaxCountReached, reset, increaseBy } =
		useProduct({
			onChange,
			product,
			value,
			initialValue,
		});

	return (
		<Provider
			value={{
				counter,
				product,
				maxCount,

				increaseBy,
			}}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children({
					count: counter,
					isMaxCountReached,
					maxCount: initialValue?.maxCount,
					product,

					increaseBy,
					reset,
				})}
			</div>
		</Provider>
	);
};

export default ProductCart;
