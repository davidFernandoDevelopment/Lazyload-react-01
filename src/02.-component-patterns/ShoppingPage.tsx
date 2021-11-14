import {
	ProductImage,
	ProductTitle,
	ProductButton,
	ProductCart,
} from './components';

import './styles/custom-styles.css';

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
				<ProductCart product={product} className='bg-dark text-white'>
					<ProductCart.Image className='custom-img' />
					<ProductCart.Title title='Hola mundo' className='text-bold' />
					<ProductCart.Button className='custom-button' />
				</ProductCart>
				<ProductCart product={product} className='bg-dark text-white'>
					<ProductImage className='custom-img' />
					<ProductTitle title='Hello world' className='text-bold' />
					<ProductButton className='custom-button' />
				</ProductCart>
				<ProductCart 
					product={product}
					style={{
						background:'#70D1F8'
					}}
				>
					<ProductImage 
						style={{
							boxShadow:'10px 10px 10px 10px rgba(0, 0, 0, 0.2)'
						}}
					/>
					<ProductTitle
						style={{
							fontWeight:'bold'
						}}
					/>
					<ProductButton
						style={{
							justifyContent:'end'
						}}
					/>
				</ProductCart>
			</div>
		</div>
	);
};

export default ShoppingPage;
