import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import {
	RegisterPage,
	FormikAbstraction,
	FormikBasicPage,
	FormikComponents,
	FormikYupPage,
} from '../Forms/pages';

export const Navigation = () => {
	return (
		<Router>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React logo' />
					<ul>
						<li>
							<NavLink to='/register' activeClassName='nav-active' exact>
								Register Page
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-basic' activeClassName='nav-active' exact>
								Formik Basic
							</NavLink>
						</li>
						<li>
							<NavLink to='/formik-yup' activeClassName='nav-active' exact>
								Formik Yup
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-components'
								activeClassName='nav-active'
								exact>
								Formik Components
							</NavLink>
						</li>
						<li>
							<NavLink
								to='/formik-abstraction'
								activeClassName='nav-active'
								exact>
								Formik Abstraction
							</NavLink>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/register'>
						<RegisterPage />
					</Route>
					<Route path='/formik-basic'>
						<FormikBasicPage />
					</Route>
					<Route path='/formik-yup'>
						<FormikYupPage />
					</Route>
					<Route path='/formik-components'>
						<FormikComponents />
					</Route>
					<Route path='/formik-abstraction'>
						<FormikAbstraction />
					</Route>
					<Redirect to='/register' />
				</Switch>
			</div>
		</Router>
	);
};
