import React, {Component} from 'react';
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

export default Todos;