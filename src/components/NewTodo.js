import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class NewTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: Date.now(),
      category: "",
      title: "",
      desc: "",
      due: new Date(),
      completed: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDate = date => {
    this.setState({due: date})
  }

  handleSubmit = () => {
    event.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodo(this.state);
      this.setState({
        category: "",
        title: "",
        desc: "",
        due: new Date()})
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="todo-form">
        <h2>To do list</h2>
        <form className="todo-input" onSubmit={() => this.handleSubmit()}>
          <input type="text" name="title" placeholder="i need to..." value={this.state.title} onChange={this.handleChange}/>
          <input type="text" name="desc" placeholder="details..." value={this.state.desc}  onChange={this.handleChange}/>
          <select name="category" onChange={this.handleChange}>
            <option hidden disabled selected value> -- select a category -- </option>
            {this.props.categories.map(cat => {
              return <option key={cat} value={cat} >{cat}</option>
            })}
          </select>
          <DatePicker
            selected={this.state.due}
            onChange={this.handleDate}
          />
          <input type="submit" name="submit-todo-form"/>
        </form>
      </div>
    );
  }
}

export default NewTodo;
