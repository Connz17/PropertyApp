import Button from "../../components/Button/Button";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./LandingPage.scss";
import { useState, useEffect } from "react";
import logo from "../../images/house.png"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

//sign in
//create new user

const LandingPage = ({profile, setProfile}) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [newProfile, setNewProfile] = useState({
    userName: "JoeTheMan",
    email: "joe@example.com",
    password: "Password!",
    image: ""
  });
  const navigate = useNavigate();
  const auth = getAuth();


  // useEffect(() => {
  //   onAuthStateChanged(auth, user => {
  //     if (user) {
  //       console.log("user logged in: ", user);
  //     } else {
  //       console.log("user logged out");
  //     }
  //   });
    
  //   }, []);

onAuthStateChanged(auth, user => {
  if (user) {
    console.log("user logged in: ", user);
  } else {
    console.log("user logged out");
  }
});


const handleSignIn = async (event) => {
  event.preventDefault();
    
    const email = profile.email;
    const password = profile.password;
    console.log(email, password);

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      //alert("Welcome!")
      //navigate("/home")

    } catch (error) {
      console.log(error);
      //Show login error message on screen
      setErrorMessage(error.message)
      setShowErrorMessage(true)
    }

}

const handleNewUser = async (event) => {
  event.preventDefault();
    console.log("new user");
//get user info
  const userEmail = newProfile.email;
  const username = newProfile.userName;
  const password = newProfile.password;
  //const picture = newProfile.image;
    console.log(userEmail , username, password);
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, userEmail, password);
      //alert("Welcome!")
      //navigate("/home")

    } catch (error) {
      console.log(error);
      //Show login error message on screen
      setErrorMessage(error.message)
      setShowErrorMessage(true)
    }
}


const toggleEntryForm = () => {
  if (showRegistration == true) {
    setShowRegistration(!showRegistration)
  }
  setShowSignIn(!showSignIn);
}


const toggleRegistrationForm = () => {
  if (showSignIn == true) {
    setShowSignIn(!showSignIn)
  }
  setShowRegistration(!showRegistration);
}


  return (
    <>
    <div>
      <img className="logo" src={logo} alt="Company logo" />
      <h2 className="title">Property Management App</h2>
    </div> <br />
    <div className="buttons">
      <Button handleClick={toggleEntryForm} buttonClass={"signIn"} buttonTitle={"Sign In"}/>
      <Button handleClick={toggleRegistrationForm} buttonClass={"newUser"} buttonTitle={"Create new user"}/>
    </div><br />
    <div className="form">
      {showSignIn && 
      <><h3>Welcome Back!</h3><br />
      { showErrorMessage && <h4>{errorMessage}</h4>}
      <SignInForm onSubmit={handleSignIn} profile={profile} setProfile={setProfile}/></>}
      {showRegistration && 
      <><h3>Join us!</h3><br />
      { showErrorMessage && <h4>{errorMessage}</h4>}
      <NewUserForm profile={newProfile} setProfile={setNewProfile} onSubmit={handleNewUser}/></>}
    </div>    
    </>
  )
}

export default LandingPage