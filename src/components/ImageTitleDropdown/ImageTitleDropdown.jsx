import "./ImageTitleDropdown.scss";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import { useEffect, useRef, useState } from "react";




const ImageTitleDropdown = ({placeHolder, options, onChange}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    // const inputRef = useRef();
  
    useEffect(() => {
      const handler = (e) => {setShowMenu(false);
        // if (inputRef.current && !inputRef.current.contains(e.target)){
        //   setShowMenu(false);
        // }
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
      onChange(option);
    };
  
    const isSelected = (option) => {
      if (!selectedValue) {
        return false;
      }
        return selectedValue.value === option.value;
  
      };
    
  


  return (
    <div><div className="dropdown-container">
    <div onClick={handleInputClick} className="dropdown-input">
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
        
    </div>
  )
}

export default ImageTitleDropdown
