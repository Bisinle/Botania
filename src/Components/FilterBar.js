import React, { useState, useRef, useEffect } from "react";

function FilterBar({ onSubmitHandle }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const buttonRef = useRef();

  const [botClass, setBotClass] = useState({
    Support: "",
    Medic: "",
    Assault: "",
    Defender: "",
    Captain: "",
    Witch: "",
  });

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDisabled(!isDisabled);
    console.log(isDropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;

    setBotClass({
      ...botClass,
      [name]: checked ? name : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collect and process the form data here
    // console.log("Selected Options:", botClass);
    // console.log(botClass.Support);
    onSubmitHandle(botClass);
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label onClick={handleDropdownToggle} style={{ cursor: "pointer" }}>
          Filter By
        </label>
        {isDropdownOpen && (
          <div className="checkboxes">
            <div className="label-checkbox">
              <label htmlFor="Support">Support</label>
              <input
                type="checkbox"
                name="Support"
                checked={botClass.Support}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="label-checkbox">
              <label htmlFor="Medic">Medic</label>
              <input
                type="checkbox"
                name="Medic"
                checked={botClass.Medic}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="label-checkbox">
              <label htmlFor="Assault">Assault</label>
              <input
                type="checkbox"
                name="Assault"
                checked={botClass.Assault}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="label-checkbox">
              <label htmlFor="Captain">Captain</label>
              <input
                type="checkbox"
                name="Captain"
                checked={botClass.Captain}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="label-checkbox">
              <label htmlFor="Defender">Defender</label>
              <input
                type="checkbox"
                name="Defender"
                checked={botClass.Defender}
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="label-checkbox">
              <label htmlFor="Witch">Witch</label>
              <input
                type="checkbox"
                name="Witch"
                checked={botClass.Witch}
                onChange={handleCheckboxChange}
              />
            </div>
            <button
              type="submit"
              id="btn"
              disabled={isDisabled}
              ref={buttonRef}
            >
              Filter
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default FilterBar;
