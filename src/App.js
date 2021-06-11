import React, { Component } from 'react';
import './App.css';
import Todolist from './component/Todolist';

class App extends Component {
  render() {
    return (
      <div className="todo-app">
        <Todolist/>
      </div>
    );
  }  
}

export default App;

