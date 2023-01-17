import "./SignInForm.scss";


const SignInForm = ({onSubmit, user, setUser}) => {
  return (
    <div>
      <form className="entryForm" onSubmit={onSubmit}>
        <label className="entryForm__label">Email:</label><br />
          <input className="entryForm__input" required type="email" onInput={event => setUser({...user, email: event.target.value}) }/><br />
        <label className="entryForm__label">Password:</label><br />
          <input className="entryForm__input" required type="password" onInput={event => setUser({...user, password: event.target.value}) }/><br />
        <input className="entryForm__submit" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default SignInForm