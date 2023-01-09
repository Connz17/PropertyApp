import { useEffect, useRef, useState } from "react";
import "./RatingDropdown.scss";
import * as IoIcons from 'react-icons/io'



const RatingDropdown = ({placeHolder, options, onChange}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)){
        setShowMenu(false);
      }
    };

  window.addEventListener("click", handler);
  return () => {
    window.removeEventListener("click", handler);
  };
  })

  const handleInputClick = (e) => {
    //e.stopPropagation();
    setShowMenu(!showMenu);
  }

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.label;
    }
    return placeHolder;
  };

  const onItemClick = (option) => {
    setSelectedValue(option);
    onChange(option.value);
  };

  const isSelected = (option) => {
    if (!selectedValue) {
      return false;
    }
      return selectedValue.value === option.value;

    };
  


  return (
    <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className="dropdown-selected-value">{getDisplay()}</div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
          <IoIcons.IoIosArrowDropdownCircle/>
          </div>
        </div>
      </div>
        {showMenu && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div onClick={() => onItemClick(option)} 
            key={option.value} 
            className={`dropdown-item ${isSelected(option) && "selected"}`}>
              {option.label}
            </div>
          ))}
        </div>
        )}
    </div>
  )
}

export default RatingDropdown