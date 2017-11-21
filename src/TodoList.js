import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <li>
            <h4>{todo.title}</h4>
            <p>{todo.priority}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
