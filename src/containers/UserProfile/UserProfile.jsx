import "./UserProfile.scss";


const UserProfile = ({user}) => {
  return (
    <div >
      <h2 className="profile__heading">Edit and Change you information</h2>
      <div>
        <h3 className="profile__name">{user.userName}</h3>
        <img className="profile__image" src={user.image} alt="" />
        <h3 className="profile__email">{user.email}</h3>
        <h3 className="profile__password">{user.password}</h3>
      </div>
    </div>
  )
}

export default UserProfile