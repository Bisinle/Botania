import React, { useState } from "react";

function FilterBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [options, setOptions] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    setOptions({
      ...options,
      [e.target.value]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect and process the form data here
    console.log("Selected Options:", options);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label onClick={handleDropdownToggle} style={{ cursor: "pointer" }}>
          Filter By
        </label>
        {isDropdownOpen && (
          <div>
            <input
              type="checkbox"
              value="option1"
              checked={options.option1}
              onChange={handleCheckboxChange}
            />
            <label>Option 1</label>
            <input
              type="checkbox"
              value="option2"
              checked={options.option2}
              onChange={handleCheckboxChange}
            />
            <label>Option 2</label>
            <input
              type="checkbox"
              value="option3"
              checked={options.option3}
              onChange={handleCheckboxChange}
            />
            <label>Option 3</label>
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FilterBar;

//   <select name="" id="">
//         <option value="All">filter By</option>
//         <option value="Supporter">Supporter</option>
//         <option value="Medic">Medic</option>
//         <option value="Assoult">Assoult</option>
//         <option value="Defender">Defender</option>
//         <option value="Captain">Captain</option>
//         <option value="Witch">Witch</option>
//       </select>
