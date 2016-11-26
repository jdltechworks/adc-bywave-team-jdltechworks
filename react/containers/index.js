import React, { Component } from 'react';
import { browserHistory, Router, Route, IntexRoute } from 'react-router';
import Login from "./Login";
import Register from "./Register";
import App from "./App";

const Root = () => {
	return(
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<Route path="/login" component={Login}></Route>
				<Route path="/register" component={Register}></Route>
			</Route>
		</Router>
	);
}

export default Root;