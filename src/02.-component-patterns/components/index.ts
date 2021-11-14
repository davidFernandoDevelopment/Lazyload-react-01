import { ProductCart as ProductCardHOC } from './ProductCart';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButton } from './ProductButton';
import { IProductCartHOCProps } from '../interfaces/interfaces';

export { ProductButton } from './ProductButton';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';

export const ProductCart: IProductCartHOCProps =
    Object.assign(ProductCardHOC, {
        Title: ProductTitle,
        Image: ProductImage,
        Button: ProductButton
    });