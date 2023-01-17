import "./NewUserForm.scss";



const NewUserForm = ({onSubmit, profile, setProfile, match, setMatch}) => {






  return (
    <div>
        <form id="new-user" className="registerForm" onSubmit={onSubmit}>
            <label className="registerForm__label">Email:</label><br />
                <input className="registerForm__input" required type="email" id="email" onInput={event => setProfile({...profile, email: event.target.value}) }/><br />
            <label className="registerForm__label" >Username:</label><br />
                <input className="registerForm__input" required type="text" onInput={event => setProfile({...profile, userName: event.target.value}) }/><br />
            <label className="registerForm__label">Password:</label><br />
                <input className="registerForm__input" required type="password" onInput={event => setMatch({...match, password: event.target.value}) }/><br />
            <label className="registerForm__label">Confirm Password:</label><br />
                <input className="registerForm__input" required type="password" onChange={event => setProfile({...profile, password: event.target.value}) } 
                    onInput={event => setMatch({...match, confirmPassword: event.target.value}) }/><br />
            <input className="registerForm__submit" type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default NewUserForm