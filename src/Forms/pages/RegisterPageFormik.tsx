import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterPageFormik = () => {
	return (
		<div style={{ margin: '0 auto' }}>
			<h1>Register Page with Formik</h1>
			<Formik
				initialValues={{
					email: '',
					password1: '',
					password2: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					email: Yup.string()
						.email('El formato no es válido')
						.required('El email es requerido'),
					password1: Yup.string()
						.min(6, 'La contraseña debe tener mas de 6 caracteres')
						.required('Ingrese la contraseña'),
					password2: Yup.string()
						.oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
						.required('Ingrese la contraseña'),
				})}>
				{(formik) => (
					<Form noValidate>
						<MyTextInput
							label='Nombre'
							type='text'
							name='email'
							placeholder='Ingrese el email'
						/>

						<MyTextInput
							label='Contraseña'
							name='password1'
							type='password'
							placeholder='Ingrese su contraseña'
						/>

						<MyTextInput
							label='Repita la contraseña'
							name='password2'
							type='password'
							placeholder='Repita la contraseña'
						/>

						<button type='submit'>Submit</button>
						<button type='button' onClick={formik.handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
