import { useState } from "react";
import "./DropDown.css";
import options from "../../data/Data";

function DropDown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Please choose the course
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
                alert(
                  "We Congratulate you on choosing the course 🥳🥳 !!!Now you are good to go 😊"
                );
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
