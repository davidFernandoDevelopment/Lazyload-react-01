import { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCart';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
	img?: string;
	className?: string;
	style?: CSSProperties;
}

export const ProductImage = ({ className, img, style }: Props) => {
	const { product } = useContext(ProductContext);
	let imgToShow: string;

	if (img) {
		imgToShow = img;
	} else if (product.img) {
		imgToShow = product.img;
	} else {
		imgToShow = noImage;
	}

	return (
		<img
			src={imgToShow}
			alt='Product'
			className={`${styles.productImg} ${className}`}
			style={style}
		/>
	);
};
