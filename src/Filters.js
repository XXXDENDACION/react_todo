import React, { Component } from 'react';

class Filters extends Component {
    state= {
        content: '',
        filters: {
            all: "selected",
            active: "",
            completed: ""
        }
    }
    handleClick = (e) => {
        console.log(e.target.textContent);
        if(e.target.textContent === "All") {
            this.setState({
                content: e.target.textContent,
                filters: {all: "selected", active: "", completed: ""}
            },() => {this.props.filterTodo(this.state.content)});
        }
        else if(e.target.textContent === "Active") {
            this.setState({
                content: e.target.textContent,
                filters: {all: "", active: "selected", completed: ""}
            },() => {this.props.filterTodo(this.state.content)});
        }
        else if(e.target.textContent === "Completed") {
            this.setState({
                content: e.target.textContent,
                filters: {all: "", active: "", completed: "selected"}
            },() => {this.props.filterTodo(this.state.content)});
        }
    }
    render() {
        return (
            <footer className="panel">
            <ul className="panel-list">
                <li className={`filter-all ${this.state.filters.all}`} onClick={this.handleClick} >All</li>
                <li className={`filter-active ${this.state.filters.active}`} onClick={this.handleClick} >Active</li>
                <li className={`filter-completed ${this.state.filters.completed}`} onClick={this.handleClick} >Completed</li>
            </ul>
        </footer>
        )
    }
}
export default Filters