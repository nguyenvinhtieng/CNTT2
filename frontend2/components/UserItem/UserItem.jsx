import React from 'react'

export default function UserItem({time = null}) {
  return (
    <>
      <div className="user-item">
        <span className="user-item__wrapper">
          <span className="avatar avatar__sm">
            <img src="https://source.unsplash.com/random" alt="" />
          </span>
          <span className="user-item__info">
            <span className="user-item__name">Tieng</span>
            {time && <time className="user-item__time">3 ngày trước</time>}
          </span>
        </span>
      </div>
    </>
  )
}
