import "./UserDisplay.scss";
import * as IoIcons from 'react-icons/io'
import { useState, useEffect } from "react";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";


const UserDisplay = ({profile}) => {
  const auth = getAuth();
  const [showLogoutButton, setShowLogoutButton] = useState(false);

const toggleButton = () => {
  setShowLogoutButton(!showLogoutButton);
}

const logOut = async () => {
  await signOut(auth)    
  };




  return (
    <>
    <div className="user-info" onClick={toggleButton}>
      { !showLogoutButton && <> 
        <img className="user-info__pic" src={profile.image} alt="" />
        <h6 className="user-info__name">{profile.userName}</h6> 
      </> }

      { showLogoutButton && <>
        <h4 className="logout__title">Log Out</h4>
        <IoIcons.IoMdLogOut className="logout__image" onClick={logOut}/>
       </>}
    </div>
    </>
  )
}

export default UserDisplay