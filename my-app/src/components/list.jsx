import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App.css';
import ListItem from './ListItem';

class TodoList extends Component {
	render() {
		const { todos } = this.props;
		return <ul className="list-task-block">{todos.map((item) => <ListItem key={item.id} item={item} />)}</ul>;
	}
}

export default connect((state) => ({
	todos: state.todos
}))(TodoList);
