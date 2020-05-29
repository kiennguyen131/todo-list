import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'



class App extends React.Component { 
  constructor(){
    super();
    this.todoItems = [
      {title: 'mua bim bim', isComplete: true},
      {title: 'Di da bong', isComplete: true},
      {title: 'Di do xang'},
      {title: 'Di choi'}
    ];
  }
  render () {
    return (
      <div className="App">
        {
          this.todoItems.length > 0 && this.todoItems.map((item, index) => 
          <TodoItem key={index} item={item}/>)
        }
        {
          this.todoItems.length === 0 && 'nothing here'
        }
      </div>
    )
  }
}

export default App;
