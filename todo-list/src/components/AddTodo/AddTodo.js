import React, {Component} from 'react';
import './AddTodo.css';

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    addTodo = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
    }

    render() {
        return(
            <form className="add-todo" onSubmit={this.addTodo}>
                <input type="text" 
                placeholder="Add todo item" 
                className="input-text" 
                value={this.state.title}
                onChange={this.onInputChange}/>
                <input type="submit" value="submit" className="input-submit"/>
            </form>
        )
    }
}

export default AddTodo;