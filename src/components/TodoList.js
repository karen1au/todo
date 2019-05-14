import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  renderItems() {
    return this.props.todos.map( (todo, index) => 
    <TodoItem key={index} {...todo} 
    deleteTodo={this.props.deleteTodo}
    categories={this.props.categories}/>
    )
  }

  render() {
    return (
      <div className="todolists">
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
