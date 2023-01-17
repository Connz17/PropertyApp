import "./SignInForm.scss";


const SignInForm = ({onSubmit, profile, setProfile}) => {
  return (
    <div>
      <form className="entryForm" onSubmit={onSubmit}>
        <label className="entryForm__label">Email:</label><br />
          <input className="entryForm__input" required type="email" onInput={event => setProfile({...profile, email: event.target.value}) }/><br />
        <label className="entryForm__label">Password:</label><br />
          <input className="entryForm__input" required type="password" onInput={event => setProfile({...profile, password: event.target.value}) }/><br />
        <input className="entryForm__submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignInForm