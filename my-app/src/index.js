import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import reducer from './reducers/tasks'
import logger from 'redux-logger'

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render( < Provider store = { store } >
    <App />
    </Provider>, document.getElementById('root')
);
