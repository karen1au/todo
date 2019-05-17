import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button } from 'semantic-ui-react'


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
    this.setState({due: date});
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
        <Form onSubmit={() => this.handleSubmit()}>
          <input className="todo-input" type="text" name="title" placeholder="i need to..." value={this.state.title} onChange={this.handleChange}/>
          <textarea rows="2" className="todo-input" type="text" name="desc" placeholder="details..." value={this.state.desc}  onChange={this.handleChange}/>
          <Form.Group widths="equal">
            <select name="category" onChange={this.handleChange}>
              <option hidden selected value>select a category</option>
              {this.props.categories.map(cat => {
                return <option key={cat} value={cat} >{cat}</option>
              })}
            </select>
              <DatePicker className="todo-input"
                selected={this.state.due}
                onChange={this.handleDate}
              />
          </Form.Group>
          <Button fluid basic type="submit" className="submit-btn">Add</Button>
        </Form>
      </div>
    );
  }
}

export default NewTodo;
