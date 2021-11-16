import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckbok } from '../components';

export const FormikAbstraction = () => {
	return (
		<div style={{ margin: '0 auto' }}>
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					terms: false,
					jobType: '',
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, 'Maximo 12 caracteres')
						.required('El nombre es requerido'),
					lastName: Yup.string()
						.max(15, 'Maximo 12 caracteres')
						.required('El apellido es requerido'),
					email: Yup.string()
						.email('Formato no válido')
						.required('El email es requerido'),
					terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
					jobType: Yup.string()
						.notOneOf(['front'], 'Opción no valida')
						.required('Seleccione una opción'),
				})}>
				{(formik) => (
					<Form noValidate>
						<MyTextInput
							label='First Name'
							name='firstName'
							id='firstName'
							type='text'
							placeholder='Ingrese el nombre'
						/>

						<MyTextInput
							label='Last Name'
							name='lastName'
							id='lastName'
							type='text'
							placeholder='Ingrese el apellido'
						/>

						<MyTextInput
							label='Email'
							name='email'
							id='email'
							type='email'
							placeholder='Ingrese el Email'
						/>

						<MySelect label='Seleccione su puesto' name='jobType'>
							<option value=''>Seleccione su puesto</option>
							<option value='dev'>Developer</option>
							<option value='back'>Backend</option>
							<option value='front'>Frontend</option>
						</MySelect>

						<MyCheckbok label='Terminos y condiciones' name='terms' />

						<button type='submit'>Enviar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
