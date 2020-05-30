import React from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends React.Component { 
  constructor(){
    super();
    this.state = {
      newItem : '',
      todoItems:  [
        {title: 'mua bim bim', isComplete: true},
        {title: 'Di da bong', isComplete: true},
        {title: 'Di do xang'},
        {title: 'Di choi'}
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
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

  onKeyUp(event){

    if (event.keyCode === 13) { //go enter
      let text = event.target.value;
      if(!text) {
        return;
      }

      text = text.trim();
      if (!text) {
        return;
      }

      
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isComplete: false},
          ...this.state.todoItems
        ]
      })
    }
  }

  onChange(event){
    this.setState({
      newItem: event.target.value
    })
  }

  render () {
    const {todoItems, newItem} = this.state;
    if (todoItems.length){
      return (
            <div className="App">
              <div className="Header">
                <input type="text" 
                placeholder="Add new to do" 
                onKeyUp={this.onKeyUp} 
                value={newItem} 
                onChange={this.onChange}/>
              </div>
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
