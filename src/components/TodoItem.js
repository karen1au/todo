import React, { Component } from 'react';
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    }
  }

  editTodo = () => {
  this.setState({editing: true})
  }

  render() {
    return (
              <div>
              { (!this.state.editing) ? 
                <div key={this.props.id}>
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
                <p>{this.props.category}</p>
                <p>due on: <Moment format="YYYY/MM/DD">{this.props.due}</Moment></p>
                <p><Moment diff={<Moment>{Date.now()}</Moment>} unit="days">{this.props.due}</Moment> days left</p>
                <button onClick={() => this.editTodo()}>edit</button><button onClick={() => this.props.deleteTodo(this.props.id)}>delete</button>
                 </div>
              :  <form key={this.props.id}>
                  <input type="text" name="title" value={this.props.title} onChange={this.handleChange}/>
                  <input type="text" name="desc" value={this.props.desc} onChange={this.handleChange}/>
                  <select name="category" onChange={this.handleChange}>
                    {this.props.categories.map(cat => {
                      return <option value={cat} >{cat}</option>
                    })}
                  </select>
                  <DatePicker
                    selected={this.props.due}
                    onChange={this.handleDate}
                  />
                  <input type="submit" name="submit-form"/>
                </form>
              } 
              </div>
            )
          }}

export default TodoItem;
