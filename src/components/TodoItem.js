import React, { Component } from 'react';
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      category: this.props.category,
      title: this.props.title,
      desc: this.props.desc,
      due: this.props.due,
      completed: this.props.completed
    }
  }

  editTodo = () => {
    this.setState({editing: true})
  }

  cancelEdit = () => {
    this.setState({editing: false})
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleDate = date => {
    this.setState({due: date})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.title.trim()) {
      const edited = {
        id: event.target.name,
        category: this.state.category,
        title: this.state.title,
        desc: this.state.desc,
        due: this.state.due,
        completed: this.props.completed
      }
      this.props.saveTodo(event.target.name, edited)
      this.setState({editing: false})
    } else {
      this.cancelEdit();
    }
  }

  render() {

    return (
              <div>
              { (!this.state.editing) ? 
                <div key={this.props.id}>
                  <h3><a style={{color: this.props.completed? "green": "red"}} name={this.props.id} onClick={(e) => this.props.completeTask(e)}>{this.props.title}</a></h3>
                  <p>{this.props.desc}</p>
                  <p>{this.props.category}</p>
                  <p>due on: <Moment format="YYYY/MM/DD">{this.props.due}</Moment></p>
                  <p><Moment diff={<Moment>{Date.now()}</Moment>} unit="days">{this.props.due}</Moment> days left</p>
                  <button onClick={() => this.editTodo()}>edit</button><button onClick={() => this.props.deleteTodo(this.props.id)}>delete</button>
                </div>
              : <form key={this.props.id} name={this.props.id} onSubmit={() => this.handleSubmit(event)}>
                  <input type="text" name="title" defaultValue={this.props.title} onChange={this.handleChange}/>
                  <input type="text" name="desc" defaultValue={this.props.desc} onChange={this.handleChange}/>
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
                  <input type="submit" name="submit-form"/>
                  <button onClick={this.cancelEdit}>cancel</button>
                </form>
              } 
              </div>
            )
          }}

export default TodoItem;
