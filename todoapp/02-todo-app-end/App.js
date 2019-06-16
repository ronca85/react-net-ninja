import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
	state = {
		todos: [
			{ id: 1, content: "Buy some milk" },
			{ id: 2, content: "Play mario kart" }
		]
	}

	deleteTodo = (id) => {
		// console.log(id);
		const todos = this.state.todos.filter( todo => {
			return todo.id !== id;
		});
		this.setState({
			todos // if same name you don't have to type {todos: todos}
		})
	}

	addTodo = (todo) => {
		// add id property to the todo that we're receiving from the input in the AddTodo component
		todo.id = Math.random();
		let todosCopy = [...this.state.todos, todo];
		this.setState({
			todos: todosCopy // if we chose to name the todosCopy the same as the original array we could shorten the object to {todos} like we did in an earlier example
		});
	}
	
	render() {
		return (
			<div className="todo-app container">
				<h1 className="center blue-text">Todos</h1>
				<Todos todos={ this.state.todos } deleteTodo={this.deleteTodo} />
				<AddTodo propAddTodo={this.addTodo} />
			</div>
		);
	}
}

export default App;

