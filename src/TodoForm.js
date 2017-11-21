import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      priority: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    // console.log('state in form', this.state);
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addTodo({
              title: this.state.title,
              priority: this.state.priority
            });
            this.setState({ title: '', priority: '' });
          }}
        >
          <label>Title</label>
          <input
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <label>Priority</label>
          <input
            name="priority"
            onChange={this.handleChange}
            value={this.state.priority}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
