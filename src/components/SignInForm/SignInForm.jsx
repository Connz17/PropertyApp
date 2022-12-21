import "./SignInForm.scss";


const SignInForm = () => {
  return (
    <div>
        <form>
            <label>Username</label>
                <input required type="text" />
            <label>Password</label>
                <input required type="password"/>
        </form>
    </div>
  )
}

export default SignInForm