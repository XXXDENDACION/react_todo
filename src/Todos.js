import React, { Component } from 'react'
import './style.css'

class Todos extends Component {
    
    render() {
        const {todos, deleteTodo} = this.props;
        const todoList = todos.length ? (
            todos.map(item => {
                return  (
                    <li className="item-list" key={item.id}>
                    <div className="view">
                        <p className="edit">
                            <span className ="marker"></span>
                            {item.content}
                            </p>
                    </div>
                    <div className="delete-item" onClick={() => deleteTodo(item.id)} >
                        x
                    </div>
                </li>
                    /* <li key={item.id}>
                    <div className="list-item">
                        <p onClick={() => deleteTodo(item.id)}>{item.content}</p>
                    </div>
                    </li> */
                )
            })
        ) : (
            <p className="center">You have no todo's left</p>
        )
        return(
            <div className="collection">
                {todoList}
            </div>
        )
    }
}
export default Todos;