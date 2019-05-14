import React, { Component } from 'react';


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
        <form className="add-category" onSubmit={() => this.handleSubmit()}>
          <input type="text" name="category" placeholder="new category" value={this.state.category} onChange={this.handleChange}/>
          <input type="submit" value="add" name="submit-category"/>
        </form>
      </div>
    );
  }
}

export default NewCategory;
