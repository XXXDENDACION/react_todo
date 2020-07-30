import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Search from './Search'


class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
    ],
    sortTodos: [

    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })  
  }
  addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
        todos: todos
      })
  }
  searchTodo =(content) => {
  
      const sortTodos = this.state.todos.filter(todo => {   
        return todo.content.toLocaleLowerCase().includes(content.content.toLocaleLowerCase());
    })
    this.setState({
      sortTodos: sortTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Search searchTodo={this.searchTodo}/>
        <ul>
        <Todos todos={this.state.sortTodos} deleteTodo={this.deleteTodo} />
        </ul>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}


export default App;
