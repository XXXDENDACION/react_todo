
import React from 'react'
import Todos from './Todos'

function TodoList ({completeTodo,todos,deleteTodo}) {
    const todoList = todos.length ? (
        todos.map(item => {
            let checked;
            if(item.isDone) checked = "checked"
            else checked = "";
            return(
                <Todos key={item.id.toString()} checked={checked} completeTodo={completeTodo} todo={item} deleteTodo={deleteTodo}/>
            )
        })
    ) : (
        <p className="center">You have no todo's left</p>
    )
    return (
        <div>
            <ul key>
                {todoList}
            </ul>
        </div>
    )
    }
export default TodoList;