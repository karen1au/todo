import React, { Component } from 'react';
import { Form, Button, Input, Icon } from 'semantic-ui-react'


class NewCategory extends Component {
  constructor(props){
    super(props);
    this.state = {
      category: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = () => {
    event.preventDefault();
    if (this.state.category.trim()) {
      this.props.addCategory(this.state);
      this.setState({category: ""})
    } else {
      return;
    }
  }

  render() {
    return (
      <div className="category-form">
          <Input fluid icon={<Icon name='add' link onClick={()=> this.handleSubmit()}/>} placeholder='add new category' name="category" onChange={this.handleChange} value={this.state.category}/>
      </div>
    );
  }
}

export default NewCategory;
