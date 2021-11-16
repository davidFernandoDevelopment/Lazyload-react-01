import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface IFormValues {
	firstName: string;
	lastName: string;
	email: string;
}

export const FormikBasicPage = () => {
    
	const validate = (values: IFormValues) => {
		const errors: FormikErrors<IFormValues> = {};

		if (!values.firstName) {
			errors.firstName = 'Required';
		} else if (values.firstName.length >= 15) {
			errors.firstName = 'Must be 15 characters or less';
		}

		if (!values.lastName) {
			errors.lastName = 'Required';
		} else if (values.lastName.length >= 10) {
			errors.lastName = 'Must be 10 characters or less';
		}

		if (!values.email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}

		return errors;
	};

	const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
		useFormik({
			initialValues: {
				firstName: '',
				lastName: '',
				email: '',
			},
			onSubmit: (values) => {
				console.log(values);
			},
			validate,
		});

	return (
		<div>
			<h1>Basic Formik</h1>
			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input
					id='firstName'
					type='text'
					name='firstName'
					onBlur={handleBlur}
					onChange={handleChange}
					value={values.firstName}
					placeholder='Ingrese el nombre'
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor='lastName'>Last Name</label>
				<input
					id='lastName'
					type='text'
					name='lastName'
					onBlur={handleBlur}
					value={values.lastName}
					onChange={handleChange}
					placeholder='Ingrese el apellido'
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input
					id='email'
					type='email'
					name='email'
					onBlur={handleBlur}
					value={values.email}
					onChange={handleChange}
					placeholder='Ingrese el correo'
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
};
