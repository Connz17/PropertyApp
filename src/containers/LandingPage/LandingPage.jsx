import Button from "../../components/Button/Button";
import NewUserForm from "../../components/NewUserForm/NewUserForm";
import SignInForm from "../../components/SignInForm/SignInForm";
import "./LandingPage.scss";


const LandingPage = () => {

//sign in
//create new user

  return (
    <div>
      <img src="" alt="" />
      <h2>Properties for you</h2>
      <div>
        <Button buttonClass={"signIn"} buttonTitle={"Sign In"}/>
        <Button buttonClass={"newUser"} buttonTitle={"Create new user"}/>
      </div>
      {<SignInForm onSubmit={handleSignIn}/>}
      {<NewUserForm onSubmit={handleNewUser}/>}
    </div>
  )
}

export default LandingPage