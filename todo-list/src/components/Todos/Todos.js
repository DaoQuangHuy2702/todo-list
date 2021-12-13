/*import React, {Component} from 'react';
import './Todos.css';
import TodoItem from '../TodoItem/TodoItem';

class Todos extends Component {
    render() {
        const {todos} = this.props;
        return(
            <div className="todos">
                <ul>
                    {
                        todos.map((item) => {
                            return <TodoItem key={item.id} todo={item} 
                                    handleChange={this.props.handleChange}
                                    deleteTodo={this.props.deleteTodo}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Todos;*/

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import './Todos.css';

Todos.propTypes = {
    todos: PropTypes.array,
    handleChange: PropTypes.func,
    deleteTodo: PropTypes.func
}

Todos.defaultProps = {
    todos: [],
    handleChange: null,
    deleteTodo: null
}

function Todos({todos, handleChange, deleteTodo}) {
    return(
        <div className="todos">
            <ul>
                {
                    todos.map((item) => {
                        return <TodoItem key={item.id} todo={item} 
                                handleChange={handleChange}
                                deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Todos;