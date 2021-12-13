import React, {Component} from 'react';
import './App.css';
import TodoApp from './components/TodoApp/TodoApp';

class App extends Component {
  render() {
    return(
      <div className="app">
        <TodoApp/>
      </div>
    )
  }
}

export default App;