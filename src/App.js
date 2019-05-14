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
    due: new Date(2019, 4, 24, 10, 33, 30, 0),
    completed: false
  },
  {
    id: 2,
    category: "school",
    title: "finish homework",
    desc: "learning mobx",
    due: new Date(2019, 4, 22, 10, 33, 30, 0),
    completed: false
  }
]

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: todos_sample,
      categories : ["home","school"],
    }
  }

  addTodo = newTodo => {
    let newList = this.state.todos;
    newList.push(newTodo);
    console.log(newList)
    this.setState({todos: newList})
  }

  deleteTodo = id => {
    event.preventDefault();
    const index = this.state.todos.findIndex(item => item.id == id);
    this.state.todos.splice(index, 1)
    this.setState({todos: this.state.todos});

  }

  saveTodo = (id, newTodo) => {
    const index = this.state.todos.findIndex(item => item.id == id);
    this.state.todos.splice(index, 1, newTodo)
    this.setState({todos: this.state.todos})
  }

  render() {
    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} categories={this.state.categories}/>
        <TodoList todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          categories={this.state.categories}
          saveTodo={this.saveTodo}/>
      </div>
    );
  }
}

export default App;
