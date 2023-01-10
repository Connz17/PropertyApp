import "./UserDisplay.scss";

import React from 'react'

const UserDisplay = ({user}) => {
  return (
    <div className="user-info">
        <img className="user-info__pic" src={user.image} alt="" />
        <h6 className="user-info__name">{user.userName}</h6>
    </div>
  )
}

export default UserDisplay