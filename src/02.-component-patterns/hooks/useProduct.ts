import { useEffect, useState } from 'react';
import { IOChangeArgs, IProduct } from '../interfaces/interfaces';

interface IUseProductArgs {
    product: IProduct;
    onChange?: (arg: IOChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: IUseProductArgs) => {

    const [counter, setCounter] = useState(value);

    const increaseBy = (val: number) => {


        const newValue = Math.max(counter + val, 0);
        setCounter(newValue);

        onChange && onChange({ count: newValue, product });
    };

    useEffect(() => {
        setCounter(value);
    }, [value]);

    return {
        counter, increaseBy
    };
};