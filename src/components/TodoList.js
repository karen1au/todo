import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Segment } from 'semantic-ui-react';

class TodoList extends Component {
  
  renderItems() {
    return this.props.todos.map( (todo, index) => 
    <TodoItem key={index} {...todo} 
    deleteTodo={this.props.deleteTodo}
    categories={this.props.categories}
    saveTodo={this.props.saveTodo}
    completeTask={this.props.completeTask}
    categoryFilter={this.props.categoryFilter}/>
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
