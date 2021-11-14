import { IProductCartProps } from '../components/ProductCart';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonProps } from '../components/ProductButton';



export interface IProduct {
    id: string;
    title: string;
    img?: string;
}

export interface IProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: IProduct;
}
export interface IProductCartHOCProps {
    ({ children, product }: IProductCartProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Button: (Props: ProductButtonProps) => JSX.Element;
}
