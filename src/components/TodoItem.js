import React, { Component } from 'react';
import Moment from 'react-moment';
import DatePicker from "react-datepicker";
import { Icon, Label } from 'semantic-ui-react';
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
              <div className="todo-item">
              { (!this.state.editing) ? 
                <div key={this.props.id}>
                  <button className="edit-btn" onClick={() => this.props.deleteTodo(this.props.id)}><Icon name='delete'/></button>
                  <button className="edit-btn" onClick={() => this.editTodo()}><Icon name='edit'/></button>
                  <a style={{textDecoration: this.props.completed? "line-through": "none"}} name={this.props.id} onClick={(e) => this.props.completeTask(e)}>{this.props.title}</a>
                  <p>{this.props.desc}</p>
                  {/* <p>due on: <Moment format="YYYY/MM/DD">{this.props.due}</Moment></p> */}
                  <p><Moment diff={<Moment>{Date.now()}</Moment>} unit="days">{this.props.due}</Moment> days left</p>
                  { (this.props.category) ? <Label size="small" content={this.props.category} onClick={()=> this.props.categoryFilter(this.props.category)}/> : null }
                </div>
              : <form key={this.props.id} name={this.props.id} onSubmit={() => this.handleSubmit(event)}>
                  <button className="edit-btn" onClick={this.cancelEdit}><Icon name='close'/></button>
                  <button className="edit-btn" type="submit" name="submit-form"><Icon name='save outline'/></button>
                  <input id="edit-title" type="text" name="title" defaultValue={this.props.title} onChange={this.handleChange}/>
                  <input id="edit-desc" type="text" name="desc" defaultValue={this.props.desc} onChange={this.handleChange}/>
                  <DatePicker id="edit-due"
                    selected={this.state.due}
                    onChange={this.handleDate}
                  />
                  <select id="edit-cat" name="category" onChange={this.handleChange}>
                    <option hidden disabled selected value>select a category</option>
                    {this.props.categories.map(cat => {
                      return <option key={cat} value={cat} >{cat}</option>
                    })}
                  </select>
                </form>
              } 
              </div>
            )
          }}

export default TodoItem;
