import React from 'react';
import classnames from 'classnames'; 
import './TodoItem.css';

class TodoItem extends React.Component{
    render(){
        const {item} = this.props;

        return(
            <div className={classnames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default TodoItem;