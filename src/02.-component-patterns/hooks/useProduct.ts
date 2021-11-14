import { useEffect, useRef, useState } from 'react';
import { IOChangeArgs, IProduct } from '../interfaces/interfaces';

interface IUseProductArgs {
    product: IProduct;
    onChange?: (arg: IOChangeArgs) => void;
    value?: number;
}

export const useProduct = ({ product, onChange, value = 0 }: IUseProductArgs) => {

    const [counter, setCounter] = useState(value);
    const isControlled = useRef(!!onChange);

    const increaseBy = (val: number) => {

        console.log('isControlled', isControlled.current);
        if (isControlled.current) {
            return onChange!({ count: val, product });
        }

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