import React from "react"
import TodosList from "./TodosList"
import Header from "./layout/Header"
import AddTodoListItem from "./AddTodoListItem"
//import { v4 as uuid } from "uuid"
import axios from "axios"

class TodoListApp extends React.Component {
  state = {
    todosList: [],
  }
  handleChange = (id) => {
    this.setState({
      todosList: this.state.todosList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }),
    })
  }
  deleteTodoListItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
      this.setState({
        todosList: [
          ...this.state.todosList.filter((dataItem) => {
            return dataItem.id !== id
          }),
        ],
      })
    )
  }
  addTodoListItem = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((response) =>
        this.setState({ todosList: [...this.state.todosList, response.data] })
      )
    // const newTodoItem = {
    //   id: uuid(),
    //   title: title,
    //   completed: false,
    // }
    // this.setState({ todosList: [...this.state.todosList, newTodoItem] })
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: { _limit: 10 },
      })
      .then((response) => this.setState({ todosList: response.data }))
  }
  render() {
    return (
      <div className="container">
        <Header />
        {/* {this.state.todosList.map((dataItem) => (
          <li>{dataItem.title}</li>
        ))} */}
        <AddTodoListItem addTodoListItem={this.addTodoListItem} />
        <TodosList
          todosList={this.state.todosList}
          handleChange={this.handleChange}
          deleteTodoListItem={this.deleteTodoListItem}
        />
      </div>
    )
  }
}

export default TodoListApp
