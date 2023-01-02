import Button from "../../components/Button/Button";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./LandingPage.scss";
import { useState } from "react";
import logo from "../../images/house.png"

//sign in
//create new user

const LandingPage = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);


const handleSignIn = (event) => {
  event.preventDefault();
    console.log("signIn");
}

const handleNewUser = (event) => {
  event.preventDefault();
    console.log("new user");
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
      <SignInForm onSubmit={handleSignIn}/></>}
      {showRegistration && 
      <><h3>Hello there</h3><br />
      <NewUserForm onSubmit={handleNewUser}/></>}
    </div>    
    </>
  )
}

export default LandingPage