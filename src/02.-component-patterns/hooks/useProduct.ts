import { useEffect, useRef, useState } from 'react';
import { IOChangeArgs, IProduct, InitialValues } from '../interfaces/interfaces';

interface IUseProductArgs {
    product: IProduct;
    onChange?: (arg: IOChangeArgs) => void;
    value?: number;
    initialValue?: InitialValues;
}

export const useProduct = ({ product, onChange, value = 0, initialValue }: IUseProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValue?.count || value);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    const increaseBy = (val: number) => {
        let newValue = Math.max(counter + val, 0);
        if (initialValue?.maxCount && val === 1) {
            newValue = Math.min(newValue, initialValue.maxCount);
        }

        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    };

    const reset = () => {
        setCounter(initialValue?.count || value);
    };

    console.log(initialValue?.count);
    return {
        counter,
        maxCount: initialValue?.maxCount,
        isMaxCountReached:
            !!initialValue?.maxCount &&
            initialValue?.maxCount === counter,

        reset,
        increaseBy
    };
};