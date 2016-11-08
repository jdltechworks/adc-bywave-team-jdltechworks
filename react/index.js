import React, { Component } from 'react';
import { render } from 'react-dom';

export default class HelloWeird extends Component {
  render(){
    return(
      <div className="container-fluid">Hello from Team RoseMale</div>
    );
  }
}

render(<HelloWeird />, document.getElementById('app'));

module.hot.accept();