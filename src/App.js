import React, { Component } from 'react';
import './App.css';
import NewTodo from './components/NewTodo.js';
import TodoList from './components/TodoList';
import NewCategory from './components/NewCategory';
import Filter from './components/Filter'

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
      catFilter: "",
      filter: "all",
      filtered: todos_sample,
      second_filter: todos_sample
    }
  }

  addTodo = newTodo => {
    let newList = this.state.todos;
    newList.push(newTodo);
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
    console.log(this.state.todos)
  }

  completeTask = (event) => {
    const selected = this.state.todos.find(item => item.id == event.target.name);
    selected.completed = !selected.completed;
    this.setState({ todos: this.state.todos});
  }

  addCategory = (newCategory) => {
    let newList = this.state.categories
    newList.push(newCategory.category)
    console.log(newList)
    this.setState({categories: newList})
  }

  selectFilter = (filter) => {
    this.setState({filter}, () => this.getFiltered(filter))
  }

  categoryFilter = (catFilter) => {
    this.setState({catFilter}, () => this.getFiltered(catFilter))
  }

  getFiltered = (filter) => {
    if (filter === "all") {
      return this.setState({filtered: this.state.todos})
    } else if (filter === "pending") {
      return this.setState({filtered: this.state.todos.filter(todo => !todo.completed)})
    } else if (filter === "completed") {
      return this.setState({filtered: this.state.todos.filter(todo => todo.completed)})
    }
      if (this.state.catFilter === "all") {
        return;
      } else if (this.state.catFilter) {
        return this.setState({filtered: this.state.todos.filter(todo => todo.category === this.state.catFilter)})
      }
  }



  render() {
    return (
      <div className="App">
        <NewTodo addTodo={this.addTodo} categories={this.state.categories}/>
        <NewCategory addCategory={this.addCategory} />
        <Filter selectFilter={this.selectFilter} 
          categories={this.state.categories}
          categoryFilter={this.categoryFilter}/>
        <TodoList todos={this.state.filtered} 
          deleteTodo={this.deleteTodo} 
          categories={this.state.categories}
          completeTask={this.completeTask}
          saveTodo={this.saveTodo}/>
      </div>
    );
  }
}

export default App;
