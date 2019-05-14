import React from 'react';

const Filter = (props) => {

    return (
      <div className="filter-list">
        <button name="all" onClick={(e)=> props.selectFilter(e.target.name)}>All</button>
        <button name="completed" onClick={(e)=> props.selectFilter(e.target.name)}>Completed</button>
        <button name="pending" onClick={(e)=> props.selectFilter(e.target.name)}>Pending</button>
        <h5>OR</h5>
        <select name="category" onChange={(e)=> props.categoryFilter(e.target.value)}>
            <option hidden selected value> -- filter by category -- </option>
            <option key="all" value="all">all</option>
            {props.categories.map(cat => {
              return <option key={cat} value={cat}>{cat}</option>
            })}
        </select>
      </div>
    );
  }

export default Filter;
