import React,{useState,useEffect} from 'react';
//import Todos from './Todos'
import AddTodo from './AddTodo'
import Search from './Search'
import Filters from './Filters';
import TodoList from './TodoList'

function App() {
  // state = {
  //   inputValue: '',
  //   todos: [
  //     {id: 1, content: 'buy some milk', isDone: false},
  //     {id: 2, content: 'play mario kart', isDone: false},
  //   ],
  //   sortTodos: [
  //     {id: 1, content: 'buy some milk', isDone: false},
  //     {id: 2, content: 'play mario kart', isDone: false}
  //   ],
  //   filterValue: 'All'
  // }
  const [state,setContent] = useState({
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
  })
  
  const deleteTodo = (id) => {
    const todos = state.todos.filter(todo => {
      return todo.id !== id
    })
    // const sortTodos = this.state.sortTodos.filter(todo => {
    //     return todo.content.toLocaleLowerCase().includes(todos.content.toLocaleLowerCase());
    // })
    setContent({
      todos: todos,
      sortTodos: todos,
      inputValue: state.inputValue,
      filterValue: state.filterValue,
    });

    // this.setState({
    //   todos: todos
    // },()=>{this.searchTodo(this.state.inputValue)})  
  }
  const addTodo = (todo) => {
      todo.id = Math.random();
      todo.isDone = false;
      console.log(state.todos);
      let todos = [...state.todos, todo];
      setContent({
        todos: todos,
        sortTodos: todos,
        inputValue: state.inputValue,
        filterValue: state.filterValue,
      });

      // this.setState({
      //   todos,
      //   sortTodos: todos
      // },()=> {this.searchTodo(this.state.inputValue)})
  }
  const searchTodo =(content) => {
      console.log(state.todos);
      let sortTodos = state.todos.filter(todo => {   
        return todo.content.toLocaleLowerCase().includes(content.toLocaleLowerCase());
    })
      if(state.filterValue === "Active") {
      sortTodos = sortTodos.filter(todo => {
        return todo.isDone === false;
      })
    }
      else if(state.filterValue === "Completed") {
      sortTodos = sortTodos.filter(todo => {
          return todo.isDone === true;
        })
      }
      setContent({
        todos: state.todos,
        sortTodos: sortTodos,
        inputValue: content,
        filterValue: state.filterValue,
      })


  }

  const completeTodo = (id) => {
    console.log("Complete", id);
     const todos = state.todos.map(item => {
        if(item.id === id) item.isDone = !item.isDone;
        return item;
     })
     setContent({
        todos: todos,
        sortTodos: todos,
        inputValue: state.inputValue,
        filterValue: state.filterValue
     });
    //  this.setState ({
    //    todos: todos,
    //    sortTodos: todos,
    //  },() => {this.searchTodo(this.state.inputValue)})

  }
  const filterTodo = (content) => {
    console.log(content);
    if(content === "All") {
      setContent({
        sortTodos: state.todos,
        filterValue: content,
        todos: state.todos,
        inputValue: state.inputValue
      })
    }
    else if(content === "Active") {
      const todos = state.todos.filter(todo=> {
          return todo.isDone === false;
      })
      setContent({
        sortTodos: todos,
        filterValue: content,
        todos: state.todos,
        inputValue: state.inputValue
      })
    }
    else if (content === "Completed") {
      const todos = state.todos.filter(todo => {
        return todo.isDone === true;
      })
      setContent({
        sortTodos: todos,
        filterValue: content,
        inputValue: state.inputValue,
        todos: state.todos
      })
    }   
  }
  useEffect(()=>{
    searchTodo(state.inputValue);
  },[state.todos, state.inputValue, state.filterValue])
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">
          Todo's
        </h1>
        <Search searchTodo={searchTodo}/>
        <TodoList completeTodo={completeTodo} todos={state.sortTodos} deleteTodo={deleteTodo}/>
        <Filters filterTodo={filterTodo}/>
        <AddTodo addTodo={addTodo}/>
      </div>
      
    );
}


export default App;
