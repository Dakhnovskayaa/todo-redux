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


// import { createStore } from 'redux';

// function list(state = [], action) {
//     if (action.type === 'ADD_TASK') {
//         return [
//             ...state,
//             action.payload
//         ];
//     }
//     return state;
// }


// const store = createStore(list);

// const taskInput = document.querySelectorAll('.task-input')[0];
// const addTask = document.querySelectorAll('.add-task')[0];
// const list = document.querySelectorAll('.list')[0];


// store.subscribe(() => {
//     list.innerHTML = '';
//     taskInput.value = ''
//     store.getState().forEach(task => {

//         const li = document.createElement('li');

//         li.textContent = task;
//         list.appendChild(li)
//     })
// })




// addTask.addEventListener('click', () => {
//     const taskName = taskInput.value;
//     store.dispatch({ type: 'ADD_TASK', payload: taskName })

// })