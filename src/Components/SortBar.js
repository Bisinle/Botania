import React from "react";
import { useState } from "react";

function SortBar({ onSortChange }) {
  function sortHandle(e) {
    // console.log();
    const sortValue = e.target.value;
    onSortChange(sortValue);
  }

  return (
    <select name="" id="sort-bar" onChange={sortHandle}>
      <option value="All">Sort By</option>
      <option value="Health">Health</option>
      <option value="Damage">Damage</option>
      <option value="Armor">Armor</option>
    </select>
  );
}

export default SortBar;
