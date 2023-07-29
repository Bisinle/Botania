import React, { useState } from "react";

function FilterBar({ onSubmitHandle }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [botClass, setBotClass] = useState({
    Support: false,
    Medic: false,
    Assault: false,
    Defender: false,
    Captain: false,
    Witch: false,
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setBotClass({
      ...botClass,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect and process the form data here
    console.log("Selected Options:", botClass);
    console.log(botClass.Support);
    onSubmitHandle(botClass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label onClick={handleDropdownToggle} style={{ cursor: "pointer" }}>
          Filter By
        </label>
        {isDropdownOpen && (
          <div className="checkboxes">
            <label htmlFor="Support">Support</label>
            <input
              type="checkbox"
              name="Support"
              checked={botClass.Support}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Medic">Medic</label>
            <input
              type="checkbox"
              name="Medic"
              checked={botClass.Medic}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Assault">Assault</label>
            <input
              type="checkbox"
              name="Assault"
              checked={botClass.Assault}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Captain">Captain</label>
            <input
              type="checkbox"
              name="Captain"
              checked={botClass.Captain}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Defender">Defender</label>
            <input
              type="checkbox"
              name="Defender"
              checked={botClass.Defender}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Witch">Witch</label>
            <input
              type="checkbox"
              name="Witch"
              checked={botClass.Witch}
              onChange={handleCheckboxChange}
            />
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FilterBar;
