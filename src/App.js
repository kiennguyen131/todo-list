import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends React.Component { 
  constructor(){
    super();
    this.state = {
      todoItems:  [
        {title: 'mua bim bim', isComplete: true},
        {title: 'Di da bong', isComplete: true},
        {title: 'Di do xang'},
        {title: 'Di choi'}
      ]
    };
  }
  onItemClick(item){
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {title: item.title, isComplete: !isComplete},
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  render () {
    const {todoItems} = this.state;
    if (todoItems.length){
      return (
            <div className="App">
              {
                todoItems.length && todoItems.map((item, index) => 
                <TodoItem key={index} item={item} onClick={this.onItemClick(item)}/>)
              }
            </div>
          )
    }
    

  }
}

export default App;
