import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const {completed, id, title} = this.props.todo;
        return(
            <li className="todo-item">
                <input type="checkbox" 
                checked={completed} 
                onChange={() => this.props.handleChange(id)}/> 
                <span className={this.props.todo.completed ? 'completed' : null}>{title}</span>
                <button className="btn-style" onClick={() => this.props.deleteTodo(id)}> X </button>
            </li>
        )
    }
}

export default TodoItem;