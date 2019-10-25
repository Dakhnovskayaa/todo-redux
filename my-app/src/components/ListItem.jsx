import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isChecked: props.item.isCompleted,
			isEditModeEnabled: false,
			currentItemId: null
		};
		this.newTask = React.createRef();
	}
	deleteTask(id) {
		this.props.onDeleteTask(id);
	}
	saveTask(id) {
		let newValueInput = document.getElementById(id);
		if (newValueInput.value !== '') {
			let isCompleted = this.props.item.isCompleted;
			this.props.onSave(document.getElementById(id), isCompleted);
			this.setState({
				isEditModeEnabled: false,
				isChecked: false		 
			});
		} else {
			alert('поле не может быть пустым');
		}
	 
	}
	handleChecked = (id) => {
		this.props.onChecked(id, this.props.item);
		this.setState({
			isChecked: !this.state.isChecked
		});
	};
	enableEditMode(id) {
		const { isEditModeEnabled } = this.state;
		this.setState({
			isEditModeEnabled: !isEditModeEnabled,
			currentItemId: id
		});
	}
	render() {
		const { isEditModeEnabled, currentItemId, date } = this.state;
		const { item } = this.props;
		return (
			<li className="list-item" key={item.id}>
				{!isEditModeEnabled &&<input type="checkbox" checked={this.state.isChecked} onChange={() => this.handleChecked(item.id)} />}
				{!isEditModeEnabled && (
					<span className={`task ${item.isCompleted ? 'completed' : ''}`}>{item.taskName}</span>
				)}
				<time >{date}</time>
				{isEditModeEnabled &&
				currentItemId === item.id && (
					<input
						className="item-text"
						id={item.id}
						type="text"
						defaultValue={item.taskName}
						ref={this.newTask}
					/>
				)}
				{isEditModeEnabled &&
				currentItemId === item.id && (
					<button className="edited-task-save btn-group" onClick={() => this.saveTask(item.id)} />
				)}
				<button className="edit-task btn-group" onClick={() => this.enableEditMode(item.id)} />
				<button className="remove-task btn-group" onClick={() => this.deleteTask(item.id)} />
			</li>
		);
	}
}

export default connect(
	(state) => ({
		todos: state.todos
	}),
	(dispatch) => ({
		onDeleteTask: (id) => {
			dispatch({
				type: 'DELETE_TASK',
				payload: {
					id: id
				}
			});
		},
		onSave: (newTask) => {
			dispatch({
				type: 'SAVE_TASK',
				payload: {
					taskName: newTask.value,
					id: newTask.id,
					isCompleted: false, 
					
				}
			});
		},
		onChecked: (id, item) => {
			dispatch({
				type: 'CHECKED_TASK',
				payload: {
					taskName: item.taskName,
					id,
					isCompleted: !item.isCompleted
				}
			});
		}
	})
)(ListItem);
