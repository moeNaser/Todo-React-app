import React, { Component } from 'react';
import propTypes from 'prop-types';
export default class ToDoItem extends Component {
  // set the style for each To DO Item
  getStyle = () => {
    return {
      backgroundColor: '#f1f1f1',
      padding: '6px 12px',
      textAlign: 'left',
      color: !this.props.itemDetails.completed ? '#adacac' : '#63b363',
      fontSize: '16px',
      borderBottom: '1px solid #dcdcdc',
      textDecoration: this.props.itemDetails.completed ? 'line-through' : 'none'
    };
  };

  render() {
    const { id, title, completed } = this.props.itemDetails;
    const deleteBtn = {
      color: '#ff7979',
      fontSize: '10px',
      float: 'right',
      backgroundColor: 'transparent',
      border: '0'
    };
    return (
      <div className="comp-todo__item" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            id={'cb' + id}
            checked={completed}
          />
          <label htmlFor={'cb' + id}>
            <span />
            {title}
          </label>
          <button
            style={deleteBtn}
            type="botton"
            onClick={this.props.deleteToDo.bind(this, id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

// ToDo PropTypes
ToDoItem.propTypes = {
  itemDetails: propTypes.object.isRequired,
  markComplete: propTypes.func.isRequired,
  deleteToDo: propTypes.func.isRequired
};
