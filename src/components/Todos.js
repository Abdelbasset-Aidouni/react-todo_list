import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem'
class Todos extends Component {
  render(){
      return this.props.todos.map((todo)=>(
        <div>
          <TodoItem key={todo.title} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        </div>
      ));
    }
}

Todos.proptype = {
  todos : PropTypes.array.isRequired
}

export default Todos;