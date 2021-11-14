import {
	ProductImage,
	ProductTitle,
	ProductButton,
	ProductCart,
} from './components';

import './styles/custom-styles.css';

import { useShoppingCart } from './hooks/useShoppingCart';
import { products } from './data/products';

export const ShoppingPage = () => {
	const {
		shoppingCart, 
		onProductCountChanges 
	} = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
				{products.map((pdt) => (
					<ProductCart
						product={pdt}
						className='bg-dark text-white'
						key={pdt.id}
						value={shoppingCart[pdt.id]?.count || 0}
						onChange={onProductCountChanges}
					>
						<ProductImage className='custom-img' />
						<ProductTitle title='Hello world' className='text-bold' />
						<ProductButton className='custom-button' />
					</ProductCart>
				))}
			</div>

			<div className='shopping-cart'>
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCart
						key={key}
						product={product}
						className='bg-dark text-white'
						style={{
							width: '100px',
						}}
						value={product.count}
						onChange={onProductCountChanges}>
						<ProductImage className='custom-img' />
						<ProductButton className='custom-button' />
					</ProductCart>
				))}
			</div>
		</div>
	);
};

export default ShoppingPage;
