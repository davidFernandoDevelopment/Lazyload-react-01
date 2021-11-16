import { ChangeEvent, FocusEvent, FormEvent, useState } from 'react';


export const useForm = <T>(initState: T) => {
    const [formData, setFormData] = useState(initState);
    const [touched, setTouched] = useState(initState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = e;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const resetForm = () => {
        setFormData({
            ...initState
        });
    };

    const isValidEmail = (email: string) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };


    return {
        ...formData,
        formData,
        touched,

        resetForm,
        isValidEmail,
        handleChange,
        handleSubmit,
        handleBlur
    };
};