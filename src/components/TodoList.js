import React, { Component } from 'react';
import Moment from 'react-moment';


class TodoList extends Component {


  render() {
    return (
      <div className="todos-container">
        <div className="todo-list">
          {this.props.todos.map(todo => {
            return (
            <div key={todo.id}>
              <h3>{todo.title}</h3>
              <p>{todo.desc}</p>
              <p>{todo.category}</p>
              <p>due on: <Moment format="YYYY/MM/DD">{todo.due}</Moment></p>
              <p><Moment diff={<Moment>{Date.now()}</Moment>} unit="days">{todo.due}</Moment> days left</p>
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
