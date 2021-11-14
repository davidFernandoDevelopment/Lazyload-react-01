import { useContext } from 'react';

import { ProductContext } from './ProductCart';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export const ProductButton = () => {
	const { counter, increaseBy } = useContext(ProductContext);
	return (
		<div className={styles.buttonsContainer}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>
			<div className={styles.countLabel}>{counter}</div>
			<button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
};
