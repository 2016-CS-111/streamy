import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from './redux/reducers';
import App from './components/App';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    <Provider store={createStore(reducer, composeEnhacers(applyMiddleware(thunk)))}>
        <App /> 
    </Provider>,
    document.querySelector('#root')
);