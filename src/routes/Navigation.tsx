import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';

import logo from '../logo.svg';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01.-lazyloads/pages';

export const Navigation = () => {
	return (
		<Router>
			<div className='main-layout'>
				<nav>
					<img src={logo} alt='React logo' />
					<ul>
						<li>
							<NavLink to='/lazy1' activeClassName='nav-active' exact>
								lazy 1
							</NavLink>
						</li>
						<li>
							<NavLink to='/lazy2' activeClassName='nav-active' exact>
								lazy 2
							</NavLink>
						</li>
						<li>
							<NavLink to='/lazy3' activeClassName='nav-active' exact>
								lazy 3
							</NavLink>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/lazy1'>
						<LazyPage1 />
					</Route>
					<Route path='/lazy2'>
						<LazyPage2 />
					</Route>
					<Route path='/lazy3'>
						<LazyPage3 />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};
