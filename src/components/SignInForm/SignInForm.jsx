import "./SignInForm.scss";


const SignInForm = () => {
  return (
    <div>
      <form className="entryForm">
        <label className="entryForm__label">Username:</label><br />
          <input className="entryForm__input" required type="text" /><br />
        <label className="entryForm__label">Password:</label><br />
          <input className="entryForm__input" required type="password"/><br />
        <input className="entryForm__submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignInForm