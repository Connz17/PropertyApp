import "./UserProfile.scss";
import * as FaIcons from 'react-icons/fa'
import { useState } from "react";



const UserProfile = ({profile, setProfile}) => {
  const [showNameEdit, setShowNameEdit] = useState(false);
  const [showPictureEdit, setShowPictureEdit] = useState(false);
  const [showEmailEdit, setShowEmailEdit] = useState(false);
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);

  const toggleNameEdit = () => {
    setShowNameEdit(!showNameEdit);
  }
  const togglePictureEdit = () => {
    setShowPictureEdit(!showPictureEdit);
  }
  const toggleEmailEdit = () => {
    setShowEmailEdit(!showEmailEdit);
  }
  const togglePasswordEdit = () => {
    setShowPasswordEdit(!showPasswordEdit);
  }

  const handleEdit = () => {
    console.log(profile);
    setShowNameEdit(false);
    setShowPictureEdit(false);
    setShowEmailEdit(false);
    setShowPasswordEdit(false);
  }

  
  return (
    <div className="profile__info">
      <h2 className="profile__heading">Edit and Change your information</h2><br />
      <div className="info__container">
        <h3 className="profile__name">Change Username</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={toggleNameEdit}/>
      </div><br />
        { showNameEdit && <div className="edit__container">
            <h3 className="edit__name">Please enter a new Username</h3>
            <input className="edit__name-input" type="text" onInput={event => setProfile({...profile, userName: event.target.value})}/>
            <button className="edit__name-button" type="submit" onClick={handleEdit}>Save</button>
        </div> } <br />

      <div className="info__container">
        <h3>Change Profile Picture</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={togglePictureEdit}/>
      </div><br />
          { showPictureEdit && <div className="edit__container">
            <h3 className="edit__name">Please select a new Profile picture</h3>
            <input className="edit__name-input" type="file" about="image/*" onInput={event => setProfile({...profile, image: URL.createObjectURL(event.target.files[0])})}/>
            <button className="edit__name-button" type="submit" onClick={handleEdit}>Save</button>
          </div>} <br />

        <div className="info__container">
          <h3 className="profile__email">Change Email Address</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={toggleEmailEdit}/>
        </div><br />
          { showEmailEdit && <div className="edit__container">
            <h3 className="edit__name">Please enter a new Email Address</h3>
            <input className="edit__name-input" type="email" onInput={event => setProfile({...profile, email: event.target.value})}/>
            <button className="edit__name-button" type="submit" onClick={handleEdit}>Save</button>
        </div> } <br />

        <div className="info__container">
          <h3 className="profile__password">Change Password</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={togglePasswordEdit}/>
        </div><br />
          { showPasswordEdit && <div className="edit__container">
            <h3 className="edit__name">Please enter a new Password</h3>
            <input className="edit__name-input" type="password" onInput={event => setProfile({...profile, password: event.target.value})}/>
            <button className="edit__name-button" type="submit" onClick={handleEdit}>Save</button>
          </div>}
      
    </div>
  )
}

export default UserProfile