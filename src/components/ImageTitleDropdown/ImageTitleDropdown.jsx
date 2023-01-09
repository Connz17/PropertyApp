import "./ImageTitleDropdown.scss";
import * as IoIcons from 'react-icons/io'
import { useEffect, useRef, useState } from "react";




const ImageTitleDropdown = ({placeHolder, options, onChange}) => {
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
      e.stopPropagation();
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
      onChange(option.key);
    };
  
    const isSelected = (option) => {
      if (!selectedValue) {
        return false;
      }
        return selectedValue.key === option.key;
  
      };
    
  


  return (
    <div className="location-container">
    <div ref={inputRef} onClick={handleInputClick} className="location-input">
        <div className="location-selected-value">{getDisplay()}</div>
        <div className="location-tools">
        <div className="location-tool">
            <IoIcons.IoIosArrowDropdownCircle/>
        </div>
    </div>
    </div>
      {showMenu && (
      <div className="location-menu">
        {options.map((option) => (
          <div onClick={() => onItemClick(option)} 
          key={option.key} 
          className={`location-item ${isSelected(option) && "selected"}`}>
            {option.label}
          </div>
        ))}
      </div>
      )}
  </div>
  )
}

export default ImageTitleDropdown
