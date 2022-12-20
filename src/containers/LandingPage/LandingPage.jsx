import "./LandingPage.scss";


const LandingPage = () => {

//sign in
//create new user

  return (
    <div>
      <img src="" alt="" />
      <h2>Properties for you</h2>
      <div>
        <button>Sign in</button>
        <button>Create new user</button>
      </div>
      {<form onSubmit={handleSignIn}>
        <label>Username</label>
          <input required type="text" />
        <label>Password</label>
          <input required type="password"/>
      </form>}
      {<form onSubmit={handleNewUser}>
      <label>Email</label>
          <input required type="email" name="" id="" />
      <label>Username</label>
          <input required type="text" />
        <label>Password</label>
          <input required type="password"/>
      </form>}
      
    </div>
  )
}

export default LandingPage