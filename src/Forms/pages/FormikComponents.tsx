import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
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
						<label htmlFor='firstName'>First Name</label>
						<Field
							id='firstName'
							name='firstName'
							type='text'
							placeholder='Ingrese el nombre'
						/>
						<ErrorMessage component='span' name='firstName' />

						<label htmlFor='lastName'>Last Name</label>

						<Field
							id='lastName'
							name='lastName'
							type='text'
							placeholder='Ingrese el apellido'
						/>
						<ErrorMessage component='span' name='lastName' />

						<label htmlFor='email'>Email</label>

						<Field
							id='email'
							name='email'
							type='text'
							placeholder='Ingrese el apellido'
						/>
						<ErrorMessage component='span' name='email' />

						<label>
							<Field name='terms' type='checkbox' />
							Terminos y condiciones
						</label>
						<ErrorMessage component='span' name='terms' />

						<label htmlFor='jobType'>Tipo de trabajo</label>

						<Field id='jobType' name='jobType' as='select'>
							<option value=''>Seleccione su puesto</option>
							<option value='dev'>Developer</option>
							<option value='back'>Backend</option>
							<option value='front'>Frontend</option>
						</Field>
						<ErrorMessage component='span' name='jobType' />

						<button type='submit'>Enviar</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
