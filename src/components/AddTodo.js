import React, { Component } from 'react';
import propTypes from 'prop-types';
export class AddTodo extends Component {
  state = {
    title: ''
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.addTodo} className="add-todo-form">
        <input
          className="add-todo-input"
          placeholder="Add new Todo..."
          name="title"
          type="text"
          value={this.state.title}
          onChange={this.onChange}
        />
        <button type="submit" className="submit-btn">
          Add ToDo
        </button>
      </form>
    );
  }
}

// ToDo PropTypes
AddTodo.propTypes = {
  addTodo: propTypes.func.isRequired
};

export default AddTodo;
