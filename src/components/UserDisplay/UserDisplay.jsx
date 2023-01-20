import "./UserDisplay.scss";
import * as IoIcons from 'react-icons/io'
import { useState, } from "react";
import { signOut, getAuth, onAuthStateChanged } from "firebase/auth";
import pic from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const UserDisplay = () => {
  const auth = getAuth();
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("User");
  const [displayPicture, setDisplayPicture] = useState(pic);


  useEffect(() =>{
  onAuthStateChanged(auth, user => {
    if (user) {
    console.log(" signed in");
    displaySetUp();
      
    } else {
      console.log(" no user ");
    }
  });
  },[name, displayPicture ])

const toggleButton = () => {
  setShowLogoutButton(!showLogoutButton);
}

const logOut = async () => {
  await signOut(auth) 
  navigate("/");  
  };


  const displaySetUp = () => {
      const profile = auth.currentUser;
      setDisplayPicture(profile.photoURL) 
      setName(profile.displayName)
  }

  


  return (
    <>
    <div className="user-info" onClick={toggleButton}>
      { !showLogoutButton && <> 
        <img className="user-info__pic" src={displayPicture} alt="" />
        <h6 className="user-info__name">{name}</h6> 
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