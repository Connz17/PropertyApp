import "./UserProfile.scss";
import * as FaIcons from 'react-icons/fa'
import { useState } from "react";
import {  getAuth, updateProfile, updatePassword, updateEmail  } from "firebase/auth";



const UserProfile = () => {
  const [showNameEdit, setShowNameEdit] = useState(false);
  const [showPictureEdit, setShowPictureEdit] = useState(false);
  const [showEmailEdit, setShowEmailEdit] = useState(false);
  const [showPasswordEdit, setShowPasswordEdit] = useState(false);
  const [ updatedName, setUpdatedName ] = useState("");
  const [ updatedPicture, setUpdatedPicture ] = useState("");
  const [ updatedPassword, setUpdatedPassword ] = useState("");
  const [ updatedEmail, setUpdatedEmail ] = useState("");

  const auth = getAuth();
  
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

  const handleNameEdit = () => {
    console.log(updatedName);
    updateProfile(auth.currentUser, {
      displayName: updatedName
    }).then(() => {
      // Profile updated!
      alert("Profile updated");
    }).catch((error) => {
      // An error occurred
      alert(error);
    });
    setShowNameEdit(false);
    console.log(auth.currentUser);
  }

  const handlePictureEdit = () => {
    console.log(updatedPicture);
    updateProfile(auth.currentUser, {
      photoURL: updatedPicture
    }).then(() => {
      // Profile updated!
      alert("Profile updated");
    }).catch((error) => {
      // An error occurred
      alert(error);
    });
  setShowPictureEdit(false);
  }

  const handleEmailEdit = () => {
    updateEmail(auth.currentUser, updatedEmail).then(() => {
      // Email updated!
      alert("Profile updated");
    }).catch((error) => {
      // An error occurred
      alert(error);
    });
  setShowEmailEdit(false);
  }

  const handlePasswordEdit = () => {
    
    updatePassword(auth.currentUser, updatedPassword).then(() => {
      // Update successful.
      alert("Profile updated");
    }).catch((error) => {
      // An error ocurred
      alert(error);
    });
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
            <input className="edit__name-input" type="text" onInput={event => setUpdatedName(event.target.value)}/>
            <button className="edit__name-button" type="submit" onClick={handleNameEdit}>Save</button>
        </div> } <br />

      <div className="info__container">
        <h3>Change Profile Picture</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={togglePictureEdit}/>
      </div><br />
          { showPictureEdit && <div className="edit__container">
            <h3 className="edit__name">Please select a new Profile picture</h3>
            <input className="edit__name-input" type="file" about="image/*" onInput={event => setUpdatedPicture(URL.createObjectURL(event.target.files[0])) }/>
            <button className="edit__name-button" type="submit" onClick={handlePictureEdit}>Save</button>
          </div>} <br />

        <div className="info__container">
          <h3 className="profile__email">Change Email Address</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={toggleEmailEdit}/>
        </div><br />
          { showEmailEdit && <div className="edit__container">
            <h3 className="edit__name">Please enter a new Email Address</h3>
            <input className="edit__name-input" type="email" onInput={event => setUpdatedEmail(event.target.value)}/>
            <button className="edit__name-button" type="submit" onClick={handleEmailEdit}>Save</button>
        </div> } <br />

        <div className="info__container">
          <h3 className="profile__password">Change Password</h3>
        <FaIcons.FaEdit className="edit__icon" onClick={togglePasswordEdit}/>
        </div><br />
          { showPasswordEdit && <div className="edit__container">
            <h3 className="edit__name">Please enter a new Password</h3>
            <input className="edit__name-input" type="password" onInput={event => setUpdatedPassword(event.target.value)}/>
            <button className="edit__name-button" type="submit" onClick={handlePasswordEdit}>Save</button>
          </div>}
      
    </div>
  )
}

export default UserProfile