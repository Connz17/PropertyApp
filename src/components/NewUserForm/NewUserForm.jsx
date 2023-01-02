import "./NewUserForm.scss";



const NewUserForm = () => {
  return (
    <div>
        <form className="registerForm">
            <label className="registerForm__label">Email:</label><br />
                <input className="registerForm__input" required type="email"/><br />
            <label className="registerForm__label" >Username:</label><br />
                <input className="registerForm__input" required type="text" /><br />
            <label className="registerForm__label">Password:</label><br />
                <input className="registerForm__input" required type="password"/><br />
            <label className="registerForm__label">Confirm Password:</label><br />
                <input className="registerForm__input" required type="password"/><br />
            <input className="registerForm__submit" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default NewUserForm