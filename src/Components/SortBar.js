import React from "react";
import { useState } from "react";

function SortBar({ getSortValues }) {
  function sortHandle(e) {
    // console.log(e.target.value);
    getSortValues(e.target.value);
  }

  return (
    <select name="" id="" onChange={sortHandle}>
      <option value="All">Sort By</option>
      <option value="Health">Health</option>
      <option value="Damage">Damage</option>
      <option value="Shield">Shield</option>
    </select>
  );
}

export default SortBar;
