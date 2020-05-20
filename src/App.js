import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    const todos = ['Learn', 'Play game', 'Work']
    
    return (
        <ul>
        { todos.map((item) => {
          return (
            <li>{ item }</li>
          )
        }) }
        </ul>
    );
  }
}

export default App;
