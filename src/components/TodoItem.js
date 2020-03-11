import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding :'10px',
            borderBottom : '1px  #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
        

    }
  render(){
    const {id,title} = this.props.todo;
      return (
        <div style={this.getStyle()} >
            <input type="checkbox"  onChange={this.props.markComplete.bind(this,id)}/>
            <span>{title}</span>
            <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)}>x</button>
        </div>  
      );
    }
}
TodoItem.proptype = {
    todos : PropTypes.object.isRequired
  }
const btnStyle =  {
    background : 'red',
    border : 'none',
    color : 'white',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float:'right'
}

export default TodoItem;