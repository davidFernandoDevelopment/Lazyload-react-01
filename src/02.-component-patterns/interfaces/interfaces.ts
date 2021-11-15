import { Props as ProductCartProps } from '../components/ProductCart';
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
    product: IProduct;
    maxCount?: number;
    increaseBy: (value: number) => void;
}
export interface IProductCartHOCProps {
    ({ children, product }: ProductCartProps): JSX.Element;
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Button: (Props: ProductButtonProps) => JSX.Element;
}

export interface IOChangeArgs {
    product: IProduct;
    count: number;
}

export interface ProductInCart extends IProduct {
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCartHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: IProduct;

    increaseBy: (value: number) => void;
    reset: () => void;
}