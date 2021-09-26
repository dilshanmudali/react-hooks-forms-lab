import React from "react";

function Filter({ onCategoryChange , search, onSearchChange}) {

  function handleSearchChange(event) {
    console.log(event.target.value)
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input onChange={handleSearchChange} type="text" name="search" value={search} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
