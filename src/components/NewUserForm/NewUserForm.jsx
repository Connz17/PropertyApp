import "./NewUserForm.scss";



const NewUserForm = () => {
  return (
    <div>
        <form>
            <label>Email</label>
                <input required type="email" name="" id="" />
            <label>Username</label>
                <input required type="text" />
            <label>Password</label>
                <input required type="password"/>
            <label>Confirm Password</label>
                <input required type="password"/>
        </form>
    </div>
  )
}

export default NewUserForm