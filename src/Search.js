import React, { Component } from 'react';

class Search extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
        this.props.searchTodo(this.state);
    }
    render() {
        return (
            <div>
                    <label>Search todo</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Search