import React from 'react'
import moment from 'moment'
export default function UserItem({name, avatar, username, time}) {
  return (
    <>
      <div className="user-item">
        <span className="user-item__wrapper">
          <span className="avatar avatar__sm">
            <img src={avatar} alt="User avatar" />
          </span>
          <span className="user-item__info">
            <span className="user-item__name">{name}</span>
            {time && <time className="user-item__time">{moment(time).startOf("hours").fromNow()}</time>}
          </span>
        </span>
      </div>
    </>
  )
}
