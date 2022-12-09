import React from 'react'

export default function ChatUsers() {
  return (
    <div className="chat__userWrapper">
      <div className="heading">Trò chuyện</div>
      <div className="chat__userList">
        { new Array(100).fill(0).map((item, index) => 
          <div className="chat__userItem" key={index}>
            <span className="wrapper">
              <span className="avatar avatar__sm">
                <img src={"/default.png"} alt="User avatar" />
              </span>
              <div className="info">
                <p className="name">{"Anonymous"}
                  {/* {user?.role == "admin" && <span className="tagvip">Admin</span>} */}
                </p>
                <div className="messWrapper">
                  <p className='mess'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt.</p>
                  <time className="timeMess">10/10/2011</time>
                </div>
              </div>
            </span>
          </div>
        )}
        
      </div>
    </div>
  )
}
