import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import TodoList from '../src/components/list';

class App extends Component {
	constructor(props) {
		super(props);
		this.taskInput = React.createRef();
	}
	addTask() {
		if (this.taskInput.current.value !== '') {
			this.props.onAddTask(this.taskInput.current.value);
			this.taskInput.current.value = '';
		} else {
			alert('поле не может быть пустым');
		}
	}
	render() {
		return (
			<div className="App">
				<div className="input-block">
					<input className="input-add" type="text" ref={this.taskInput} />
					<button className="btn" onClick={() => this.addTask()}>
						add task
					</button>
				</div>
				<TodoList />
			</div>
		);
	}
}

export default connect(
	(state) => ({
		testStore: state
	}),
	(dispatch) => ({
		onAddTask: (taskName) => {
			dispatch({
				type: 'ADD_TASK',
				payload: {
					taskName,
					id: Date.now().toString(),
					isCompleted: false
				}
			});
		}
	})
)(App);
