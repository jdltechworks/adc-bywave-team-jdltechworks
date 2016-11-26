import React, { Component } from 'react';

export default class Register extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-md-4 col-md-offset-4" style={{ marginTop: '5%' }}>
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Registration</h3>
								</div>
								<form>
								  <div className="form-group">
								    <label htmlFor="exampleInputEmail1">First Name</label>
								    <input type="fname" className="form-control" id="exampleInputEmail1" placeholder="First Name" />
								  </div>
								  <div className="form-group">
								    <label htmlFor="exampleInputEmail1">Last Name</label>
								    <input type="lname" className="form-control" id="exampleInputEmail1" placeholder="Last Name" />
								  </div>
								  <div className="form-group">
								    <label htmlFor="exampleInputEmail1">Email address</label>
								    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
								  </div>
								  <div className="form-group">
								    <label htmlFor="exampleInputPassword1">Password</label>
								    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
								  </div>
								  <div className="form-group">
								    <input type="cpassword" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
								  </div>
								  <button type="submit" className="btn btn-default">Submit</button>
								</form>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}