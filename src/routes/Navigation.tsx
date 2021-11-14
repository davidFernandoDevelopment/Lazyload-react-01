import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
} from 'react-router-dom';

import logo from '../logo.svg';
import ShoppingPage from '../02.-component-patterns/ShoppingPage';

export const Navigation = () => {
	return (
		<Router>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React logo' />
					<ul>
						<li>
							<NavLink to='/' activeClassName='nav-active' exact>
								Shopping
							</NavLink>
						</li>
						<li>
							<NavLink to='/lazy2' activeClassName='nav-active' exact>
								User
							</NavLink>
						</li>
						<li>
							<NavLink to='/lazy3' activeClassName='nav-active' exact>
								Config
							</NavLink>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/lazy1'>
						<ShoppingPage />
					</Route>
					<Route path='/lazy2'>
						<h1>User</h1>
					</Route>
					<Route path='/lazy3'>
						<h1>Config</h1>
					</Route>
					<Redirect to='/lazy1' />
				</Switch>
			</div>
		</Router>
	);
};
