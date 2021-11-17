import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MySelect, MyTextInput } from '../components';

import formJSON from '../data/custom-hook.json';

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};

for (const input of formJSON) {
	initialValues[input.name] = input.value;

	if (!input.validations) continue;

	let schema = Yup.string();

	for (const rule of input.validations) {
		if (rule.type === 'required') {
			schema = schema.required('Este campo es requerido');
		}

		if (rule.type === 'minLength') {
			schema = schema.min(
				(rule as any).value,
				'Como minimo deben ser 6 caracteres'
			);
		}

		if (rule.type === 'email') {
			schema = schema.email('Formato no valido');
		}
	}

	requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
	return (
		<div>
			<h1>Dynamic Forms</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(values) => {
					console.log(values);
				}}>
				{(formik) => (
					<Form noValidate>
						{formJSON.map(({ type, name, placeholder, label, options }) => {
							if (type === 'input' || type === 'password' || type === 'email') {
								return (
									<MyTextInput
										key={name}
										label={label}
										type={type as any}
										name={name}
										placeholder={placeholder}
									/>
								);
							} else if (type === 'select') {
								return (
									<MySelect key={name} label={label} name={name}>
										<option value=''>Seleccione una opción</option>
										{options?.map(({ id, description }) => (
											<option key={id} value={id}>
												{description}
											</option>
										))}
									</MySelect>
								);
							}

							throw new Error(`Type: ${type} No es soportado`);
						})}

						<button type='submit'>Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
