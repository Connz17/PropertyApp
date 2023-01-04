import "./Nav.scss";
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from "react";
import { SidebarData } from "../../components/SidebarData/SidebarData";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";


    //house the nav bar or aside
    // buttons include home, sign out, settings (edit user, edit display ui), search and filter, user avatar and name & add new property

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  }



  return (
  <>
  <IconContext.Provider value={{color:"white"}}>
    <div className="aside">
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar}/>
      </Link>
    </div>
    <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
      <ul className="nav-menu__items" onClick={showSidebar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose/>
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.class}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
    </IconContext.Provider>
  </>
  )
}

export default Nav