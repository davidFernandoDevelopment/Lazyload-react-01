import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
	const {
		errors,
		touched,
		handleSubmit,
		getFieldProps,
	} = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		onSubmit: (values) => {
			console.log(values);
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Maximo 12 caracteres')
				.required('El nombre es requerido'),
			lastName: Yup.string()
				.max(15, 'Maximo 12 caracteres')
				.required('El apellido es requerido'),
			email: Yup.string()
				.email('Formato no válido')
				.required('El email es requerido'),
		}),
	});

	return (
		<div>
			<h1>Basic Formik (npm i yup)</h1>
			<form noValidate onSubmit={handleSubmit}>
				<label htmlFor='firstName'>First Name</label>
				<input
					id='firstName'
					type='text'
					{...getFieldProps('firstName')}
					placeholder='Ingrese el nombre'
				/>
				{touched.firstName && errors.firstName && (
					<span>{errors.firstName}</span>
				)}

				<label htmlFor='lastName'>Last Name</label>
				<input
					id='lastName'
					type='text'
					{...getFieldProps('lastName')}
					placeholder='Ingrese el apellido'
				/>
				{touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

				<label htmlFor='email'>Email</label>
				<input
					id='email'
					type='email'
					{...getFieldProps('email')}
					placeholder='Ingrese el correo'
				/>
				{touched.email && errors.email && <span>{errors.email}</span>}

				<button type='submit'>Enviar</button>
			</form>
		</div>
	);
};
