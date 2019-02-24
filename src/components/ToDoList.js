import React, { Component } from 'react';
import propTypes from 'prop-types';
import ToDoItem from './ToDoItem';

class ToDo extends Component {
  render() {
    const listOfItems = this.props.toDoItems;
    return (
      <div>
        <ul>
          {listOfItems.map(item => (
            <ToDoItem
              key={item.id}
              itemDetails={item}
              markComplete={this.props.markComplete}
              deleteToDo={this.props.deleteToDo}
            />
          ))}
        </ul>
      </div>
    );
  }
}

// ToDo PropTypes
ToDo.propTypes = {
  toDoItems: propTypes.array.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteToDo: propTypes.func.isRequired
};

export default ToDo;
