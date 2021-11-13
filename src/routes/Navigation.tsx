import { Suspense } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';

import { routes } from './Routes';

export const Navigation = () => {
	return (
		<Suspense fallback={<span>Loading ....</span>}>
			<Router>
				<div className='main-layout'>
					<nav>
						<img src={logo} alt='React logo' />
						<ul>
							{routes.map(({ name, path }) => (
								<li key={path}>
									<NavLink to={path} activeClassName='nav-active'>
										{name}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<Switch>
						{routes.map(({ path, component: Component }) => (
							<Route
								key={path}
								path={path}
								render={() => {
									return <Component />;
								}}
							/>
						))}
						<Redirect to={routes[0].path} />
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
};
