import React, { Component } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoContainer extends Component {
  constructor() {
    super();

    this.state = {
      todos: [
        { title: 'test', priority: 'high' },
        { title: 'another todo', priority: 'low' }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo]
    }));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default TodoContainer;
