import {
	ProductImage,
	ProductTitle,
	ProductButton,
	ProductCart,
} from './components';

const product = {
	id: '1',
	title: 'Coffee Shug',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				<ProductCart product={product}>
					<ProductCart.Image />
					<ProductCart.Title title={'Hola mundo'} />
					<ProductCart.Button />
				</ProductCart>
				<ProductCart product={product}>
					<ProductImage />
					<ProductTitle title='Hello world' />
					<ProductButton />
				</ProductCart>
			</div>
		</div>
	);
};

export default ShoppingPage;
