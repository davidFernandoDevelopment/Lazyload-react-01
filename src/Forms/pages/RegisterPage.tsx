import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

interface IData {
	email: string;
	password1: string;
	password2: string;
}

export const RegisterPage = () => {
	const {
		email,
		password1,
		password2,
		touched,
		handleChange,
		handleSubmit,
		handleBlur,
		resetForm,
		isValidEmail,
	} = useForm<IData>({
		email: '',
		password1: '',
		password2: '',
	});

	return (
		<div style={{ margin: 'auto' }}>
			<h1>Register Page</h1>
			<form noValidate onSubmit={(e) => handleSubmit(e)}>
				<input
					autoComplete='off'
					name='email'
					type='email'
					placeholder='Ingrese el email'
					value={email}
					onBlur={handleBlur}
					onChange={handleChange}
					className={`${email.trim().length <= 0 && 'has-error'}`}
				/>
				{touched.email && email.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{!!email.trim().length && !isValidEmail(email) && (
					<span>Formato no válido</span>
				)}

				<input
					autoComplete='off'
					name='password1'
					type='password'
					placeholder='Ingrese el password'
					value={password1}
					onBlur={handleBlur}
					onChange={handleChange}
				/>
				{touched.password1 && password1.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{!!password1.trim().length && password1.length < 6 && (
					<span>El password debe tener mas de 6 caracteres</span>
				)}
				<input
					autoComplete='off'
					name='password2'
					type='password'
					placeholder='Confirme el password'
					value={password2}
					onBlur={handleBlur}
					onChange={handleChange}
				/>
				{touched.password2 && password2.trim().length <= 0 && (
					<span>Este campo es necesario</span>
				)}
				{!!password2.trim().length && password1 !== password2 && (
					<span>Las contraseñas deben coincidir</span>
				)}

				<button type='submit'>Registrarme</button>
				<button type='button' onClick={resetForm}>
					Reset Form
				</button>
			</form>
		</div>
	);
};
