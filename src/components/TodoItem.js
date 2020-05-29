import React from 'react';
import classnames from 'classnames'; 
import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends React.Component{
    render(){
        const {item, onClick} = this.props;
        let url = checkImg;
        if (item.isComplete){
            url = checkCompleteImg;
        }
        return(
            <div  className={classnames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
                <img src={url} width={32} onClick={onClick}/>
                <p>{this.props.item.title}</p>
            </div>
        )
    }
}

export default TodoItem;