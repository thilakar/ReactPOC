import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import allReducers from './reducers/index';
import App from './components/login.js';  


// const store = createStore(
//     allReducers
//     //applyMiddleware(thunk, promise, logger)
// );

ReactDOM.render(
	// <Provider store={store}>
        <App />,
    // </Provider>, 
	document.getElementById('app')

);