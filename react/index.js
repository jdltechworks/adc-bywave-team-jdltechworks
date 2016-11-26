import React, { Component } from 'react';
import { render } from 'react-dom';
import Root from './containers';

render(<Root />, document.getElementById('app'));

module.hot.accept();