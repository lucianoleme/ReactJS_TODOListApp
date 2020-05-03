import React from "react"
import TodoListItem from "./TodoListItem"

class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todosList.map((dataItem) => (
          <TodoListItem
            key={dataItem.id}
            dataItem={dataItem}
            handleChange={this.props.handleChange}
            deleteTodoListItem={this.props.deleteTodoListItem}
          />
        ))}
      </div>
    )
  }
}

// function TodosList(props) {
//   return (
//     <div>
//       {props.todosList.map((dataItem) => (
//         <li key={dataItem.id}>{dataItem.title}</li>
//       ))}
//     </div>
//   )
// }

export default TodosList
