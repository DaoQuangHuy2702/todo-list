/*import React, {Component} from 'react';
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

export default TodoItem;*/

import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

TodoItem.propTypes = {
    todo: PropTypes.object,
    handleChange: PropTypes.func,
    deleteTodo: PropTypes.func
}

TodoItem.defaultProps = {
    todo: [],
    handleChange: null,
    deleteTodo: null
}

function TodoItem({todo, handleChange, deleteTodo}) {
    return(
        <li className="todo-item">
            <input type="checkbox" 
            checked={todo.completed} 
            onChange={() => handleChange(todo.id)}/> 
            <span className={todo.completed ? 'completed' : null}>{todo.title}</span>
            <button className="btn-style" onClick={() => deleteTodo(todo.id)}> X </button>
        </li>
    )
}

export default TodoItem;