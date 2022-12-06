import React from 'react'
import moment from 'moment'
export default function UserItem({user, time}) {
  return (
    <>
      <div className="user-item">
        <span className="user-item__wrapper">
          <span className="avatar avatar__sm">
            <img src={user?.avatar || "/default.png"} alt="User avatar" />
          </span>
          <span className="user-item__info">
            <span className="user-item__name">{user?.fullname || "Anonymous"}</span>
            {time && <time className="user-item__time">{moment(time).startOf("hours").fromNow()}</time>}
          </span>
        </span>
      </div>
    </>
  )
}
