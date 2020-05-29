import React from 'react';
import classnames from 'classnames'; 
import './TodoItem.css';

class TodoItem extends React.Component{
    render(){
        const {item, onClick} = this.props;
        return(
            <div onClick={onClick} className={classnames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default TodoItem;