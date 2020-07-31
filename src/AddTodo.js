import React, {useState} from 'react'

function AddTodo({addTodo}) {
    const [state, setContent] = useState({content:""})

    const handleChange = (e) => {
        setContent({
            content: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(state)
        setContent({
            content: ''
        });
    }
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Add new todo</label>
                    <input 
                    type="text" 
                    onChange={handleChange} 
                    value={state.content}

                    />
                </form>
            </div>
        )
}
export default AddTodo