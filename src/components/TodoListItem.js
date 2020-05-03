import React, { Component } from "react"

export class TodoListItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#c5e2d2",
      textDecoration: "line-though",
    }
    const { completed, id, title } = this.props.dataItem
    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChange(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button
          className="btn-style"
          onClick={() => this.props.deleteTodoListItem(id)}
        >
          {" "}
          X{" "}
        </button>
      </li>
    )
  }
}

export default TodoListItem
