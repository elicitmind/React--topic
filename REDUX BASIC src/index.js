import React from 'react';
import ReactDOM from 'react-dom';
//import Provider component from react-redux npm package
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
//import our created store
import store from './store/redux-logic';

ReactDOM.render(
//wrap the highest level App component using Provider with our store prop
//to allow access to its data for all the children
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
