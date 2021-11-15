import {
	ProductImage,
	ProductTitle,
	ProductButton,
	ProductCart,
} from './components';

import './styles/custom-styles.css';

import { products } from './data/products';

const PRODUCT = products[0];

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<ProductCart
				product={PRODUCT}
				className='bg-dark text-white'
				key={PRODUCT.id}
				initialValue={{
					count: 4, // Puede ser del LS.
					maxCount: 10,
				}}>
				{({ count, isMaxCountReached, increaseBy, reset }) => (
					<>
						<ProductImage className='custom-img' />
						<ProductTitle title='Hello world' className='text-bold' />
						<ProductButton className='custom-button' />

						<button onClick={reset}>Reset</button>
						<button onClick={() => increaseBy(-2)}>-2</button>
						{!isMaxCountReached && (
							<button onClick={() => increaseBy(2)}>+2</button>
						)}

						<span>{count}</span>
					</>
				)}
			</ProductCart>
		</div>
	);
};

export default ShoppingPage;
