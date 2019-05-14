import React, { Component } from 'react';
import './App.css';
import NewTodo from './components/NewTodo.js';
import TodoList from './components/TodoList';

const todos_sample = [
  {
    id: 1,
    category: "home",
    title: "buy milk",
    desc: "2% from walmart",
    due: "2019-05-15",
    completed: false
  },
  {
    id: 2,
    category: "school",
    title: "finish homework",
    desc: "learning mobx",
    due: "2019-05-19",
    completed: false
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos_sample,
      categories : ["home","school"],
      editing: false,
    }
  }

  addTodo = newTodo => {
    event.preventDefault();
    let newList = this.state.todos;
    newList.push(newTodo);
    console.log(newList)
    this.setState({todos: newList})
  }

  deleteTodo = id => {
    event.preventDefault();
    const index = this.state.todos.findIndex(item => item.id === id);
    this.state.todos.splice(index, 1)
    this.setState({todos: this.state.todos});

  }

  editTodo = id => {
    event.preventDefault();
    this.setState({editing: true})
  }

  render() {
    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} categories={this.state.categories}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} editing={this.state.editing}/>
      </div>
    );
  }
}

export default App;
