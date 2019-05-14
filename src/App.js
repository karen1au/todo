import React, { Component } from 'react';
import './App.css';
import NewTodo from './components/NewTodo.js';
import TodoList from './components/TodoList';

const todos = [
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
      todos: todos,
      categories : ["home","school"],
    }
  }

  addTodo = newTodo => {
    event.preventDefault();
    let newList = this.state.todos;
    newList.push(newTodo);
    console.log(newList)
    this.setState({todos: newList})
  }

  render() {
    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} categories={this.state.categories}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
