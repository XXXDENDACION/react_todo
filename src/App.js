import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Search from './Search'
import Filters from './Filters';


class App extends Component {
  state = {
    inputValue: '',
    todos: [
      {id: 1, content: 'buy some milk', isDone: false},
      {id: 2, content: 'play mario kart', isDone: false},
    ],
    sortTodos: [
      {id: 1, content: 'buy some milk', isDone: false},
      {id: 2, content: 'play mario kart', isDone: false}
    ],
    filterValue: 'All'
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    // const sortTodos = this.state.sortTodos.filter(todo => {
    //     return todo.content.toLocaleLowerCase().includes(todos.content.toLocaleLowerCase());
    // })
    this.setState({
      todos: todos
    },()=>{this.searchTodo(this.state.inputValue)})  
  }
  addTodo = (todo) => {
      todo.id = Math.random();
      todo.isDone = false;
      let todos = [...this.state.todos, todo];
      this.setState({
        todos: todos,
        sortTodos: todos
      },()=> {this.searchTodo(this.state.inputValue)})
  }
  searchTodo =(content) => {

      let sortTodos = this.state.todos.filter(todo => {   
        return todo.content.toLocaleLowerCase().includes(content.toLocaleLowerCase());
    })
      if(this.state.filterValue === "Active") {
      sortTodos = sortTodos.filter(todo => {
        return todo.isDone === false;
      })
    }
      else if(this.state.filterValue === "Completed") {
      sortTodos = sortTodos.filter(todo => {
          return todo.isDone === true;
        })
      }
    this.setState({
      sortTodos: sortTodos,
      inputValue: content
    })
  }

  completeTodo = (id) => {
    console.log("Complete", id);
     const todos = this.state.todos.map(item => {
        if(item.id === id) item.isDone = !item.isDone;
        return item;
     })
     this.setState ({
       todos: todos,
       sortTodos: todos,
     },() => {this.searchTodo(this.state.inputValue)})

  }
  filterTodo = (content) => {
    console.log(content);
    if(content === "All") {
      this.setState({
        sortTodos: this.state.todos,
        filterValue: content
      })
    }
    else if(content === "Active") {
      const todos = this.state.todos.filter(todo=> {
          return todo.isDone === false;
      })
      this.setState({
        sortTodos: todos,
        filterValue: content
      })
    }
    else if (content === "Completed") {
      const todos = this.state.todos.filter(todo => {
        return todo.isDone === true;
      })
      this.setState({
        sortTodos: todos,
        filterValue: content
      })
    }   
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Search searchTodo={this.searchTodo}/>
        <ul>
        <Todos completeTodo={this.completeTodo} todos={this.state.sortTodos} deleteTodo={this.deleteTodo} />
        </ul>
        <Filters filterTodo={this.filterTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
      
    );
  }
}


export default App;
