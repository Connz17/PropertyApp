import Button from "../../components/Button/Button";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./LandingPage.scss";
import { useState } from "react";

//sign in
//create new user

const LandingPage = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);



const handleSignIn = () => {
    console.log("signIn");
}

const handleNewUser = () => {
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
    <div>
      <img src="" alt="" />
      <h2>Properties for you</h2>
      <div>
        <Button handleClick={toggleEntryForm} buttonClass={"signIn"} buttonTitle={"Sign In"}/>
        <Button handleClick={toggleRegistrationForm} buttonClass={"newUser"} buttonTitle={"Create new user"}/>
      </div>
      {showSignIn && <SignInForm onSubmit={handleSignIn}/>}
      {showRegistration && <NewUserForm onSubmit={handleNewUser}/>}
    </div>
  )
}

export default LandingPage