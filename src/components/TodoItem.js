import React from "react"

class TodoItem extends React.Component {
    render() {
        return (
            <li>
            <input 
            type="checkbox" 
            check={this.props.todo.completed}
            onChange={()=> this.props.handleChangeProps(this.props.todo.id)}
            /> 
            {this.props.todo.title}
            </li> 
            )
    }
}

export default TodoItem