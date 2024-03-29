/*import React, {Component} from 'react';
import './TodoApp.css';
import Header from '../Header/Header';
import Todos from '../Todos/Todos';
import AddTodo from '../AddTodo/AddTodo';
import axios from 'axios';

class TodoApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        const config = {
            params: {
                _limit: 5
            }
        }
        
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => this.setState({ todos: response.data }));
    }

    handleCheckboxChange = (id) => {
        const todoList = [...this.state.todos];
        const todoResult = todoList.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        this.setState({
            todos: todoResult
        })
    }

    handleDeleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(reponse => this.setState({
                todos: [
                ...this.state.todos.filter(todo => {
                return todo.id !== id;
                })
                ]
        }))
    }

    handleAddTodo = (title) => {
        const newTodo = {
            title: title,
            completed: false
        }

        axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            .then(response => {
                console.log(response.data)
                this.setState({
                todos: [...this.state.todos, response.data]
            })
        });
    }

    render() {
        const {todos} = this.state;
        console.log(todos);
        return(
            <div className="todo-app">
                <Header/>
                <AddTodo addTodo={this.handleAddTodo}/>
                <Todos todos={todos} handleChange={this.handleCheckboxChange} deleteTodo={this.handleDeleteTodo}/>
            </div>
        )
    }
}

export default TodoApp;*/

import React, {useState, useEffect} from 'react';
import './TodoApp.css';
import Header from '../Header/Header';
import Todos from '../Todos/Todos';
import AddTodo from '../AddTodo/AddTodo';
import Footer from '../Footer/Footer';
import axios from 'axios';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const config = {
            params: {
            _limit: 8
            }
        }

        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => setTodos(response.data));
    }, [])

    const handleCheckboxChange = (id) => {
        const todoList = [...todos];
        const todoResult = todoList.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })

        setTodos(todoResult);
    }

    const handleDeleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(reponse => setTodos(
                [
                    ...todos.filter(todo => {
                    return todo.id !== id;
                    })
                ]
        ))
    }

    const handleAddTodo = (title) => {
        const newTodo = {
            title: title,
            completed: false
        }

        axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            .then(response => {
                setTodos([...todos, response.data])
        });
    }

    return(
        <div className="todo-app">
            <Header/>
            <AddTodo addTodo={handleAddTodo}/>
            <Todos todos={todos} handleChange={handleCheckboxChange} deleteTodo={handleDeleteTodo}/>
            <Footer/>
        </div>
    )
}

export default TodoApp;