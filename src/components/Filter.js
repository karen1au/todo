import { Button, Dropdown } from 'semantic-ui-react'
import React from 'react';

const Filter = (props) => {

    return (
      <div className="filter-list">
        <Button inverted className="filter-btn" compact name="all" onClick={(e)=> props.selectFilter(e.target.name)}>All</Button>
        <Button inverted className="filter-btn" compact name="completed" onClick={(e)=> props.selectFilter(e.target.name)}>Completed</Button>
        <Button inverted className="filter-btn" compact name="pending" onClick={(e)=> props.selectFilter(e.target.name)}>Pending</Button>
        <span className="or">OR</span>
        <select className="option-list" name="category" onChange={(e)=> props.categoryFilter(e.target.value)}>
            <option hidden selected value>filter by category</option>
            <option key="all" value="all">all</option>
            {props.categories.map(cat => {
              return <option key={cat} value={cat}>{cat}</option>
            })}
        </select>
      </div>
    );
  }

export default Filter;
