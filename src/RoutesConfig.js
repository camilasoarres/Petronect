// Libs
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Login from './component/Login/Login';
import Dashboard from './component/DashBoard/DashBoard';
import FiltersAndNotifications from './component/filtersAndNotifications/IndexFilters';

export class RoutesConfig extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route path='/login' component={Login} />
				<Route component={FiltersAndNotifications} />
			</Switch>
		);
	}
}

export default RoutesConfig;
