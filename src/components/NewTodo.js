import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Moment from 'react-moment';
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

  render() {
    return (
      <div className="todo-form">
        <h2>To do list</h2>
        <form className="todo-input" onSubmit={() => this.props.addTodo(this.state)}>
          <input type="text" name="title" placeholder="i need to..." onChange={this.handleChange}/>
          <input type="text" name="desc" placeholder="details..." onChange={this.handleChange}/>
          <select name="category" onChange={this.handleChange}>
            {this.props.categories.map(cat => {
              return <option value={cat} >{cat}</option>
            })}
          </select>
          <DatePicker
            selected={this.state.due}
            onChange={this.handleDate}
          />
          <input type="submit" name="submit-form"/>
        </form>
      </div>
    );
  }
}

export default NewTodo;
