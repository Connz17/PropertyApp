import "./UserProfile.scss";
import * as FaIcons from 'react-icons/fa'
import { useState } from "react";



const UserProfile = ({user, setUser}) => {
  const [showEdit, setShowEdit] = useState(false);

  const toggleNameEdit = () => {
    setShowEdit(!showEdit);
  }

  const handleEdit = () => {
    console.log(user);
    setShowEdit(!showEdit);
  }

  
  return (
    <div className="profile__info">
      <h2 className="profile__heading">Edit and Change you information</h2><br />
      <div className="info__container">
        <h3 className="profile__name">Change Username</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={toggleNameEdit}/>
          
      </div>
      { showEdit && <div className="edit__container">
            <h3 className="edit__name">Please enter a new Username</h3>
            <input className="edit__name-input" type="text" onInput={event => setUser({...user, userName: event.target.value})}/>
            <button className="edit__name-button" type="submit" onClick={handleEdit}>Save</button>
          </div> }
      <div className="info__container">
        <h3>Change Profile Picture</h3>
        {/* <img className="profile__image" src={user.image} alt="" /> */}
        <FaIcons.FaEdit className="edit__icon"/>
        <div className="edit__container">
            
            </div>
      </div>
        <div className="info__container">
          <h3 className="profile__email">Change Email Address</h3>
          {/* <h3 className="profile__email">{user.email}</h3> */}
        <FaIcons.FaEdit className="edit__icon"/>
        <div className="edit__container">
            
            </div>
        </div>
        <div className="info__container">
          <h3 className="profile__password">Change Password</h3>
          {/* <h3 className="profile__password">{user.password}</h3> */}
        <FaIcons.FaEdit className="edit__icon"/>
        <div className="edit__container">
            
            </div>
        </div>
        
      
    </div>
  )
}

export default UserProfile