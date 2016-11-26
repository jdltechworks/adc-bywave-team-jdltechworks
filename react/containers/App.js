import React, { Component } from 'react';

import Header from '../commons/Header';

export default class App extends Component{
	render(){
		let { props } = this;
		let { children } = props;
		return(
			<div className="wrapper">
				<Header />
				{ children }
			</div>
		);
	}
}