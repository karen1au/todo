import React from 'react';

const Filter = (props) => {

    return (
      <div className="filter-list">
        <button name="all" onClick={(e)=> props.selectFilter(e.target.name)}>All</button>
        <button name="completed" onClick={(e)=> props.selectFilter(e.target.name)}>Completed</button>
        <button name="pending" onClick={(e)=> props.selectFilter(e.target.name)}>Pending</button>
      </div>
    );
  }

export default Filter;
