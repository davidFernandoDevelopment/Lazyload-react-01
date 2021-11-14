import { IProduct } from '../interfaces/interfaces';
const product = {
	id: '1',
	title: 'Coffee Shug',
	img: './coffee-mug.png',
};
const product1 = {
	id: '2',
	title: 'Coffee Meme',
	img: './coffee-mug2.png',
};

export const products: IProduct[] = [product, product1];