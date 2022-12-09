import React from 'react'
import { GrAttachment } from 'react-icons/gr'
import { ImAttachment } from 'react-icons/im'
import Editer from '~/components/Editer/Editer'
import UserItem from '~/components/UserItem/UserItem'

export default function chat() {
  const changeVal = (val) => {
    console.log(val)
  }
  return (
    <div className='chat'>
      <div className="chat__user">
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
      </div>
      <div className="chat__content">
        <div className="chat__contentHead">
          <UserItem user={{}}></UserItem>
        </div>
        <div className="chat__contentMess">
          <div className="chat__contentMessWrapper">
            <div className="chat__contentMessList">
              {new Array(100).fill(0).map((item, index) =>{
                // random number is true or false
                const isMe = Math.random() >= 0.5
                return (
                  <div className={`chat__contentMessItem ${isMe ? "is-me" : ""}`} key={index}>
                    <div className="chat__contentMessItem--avatar">
                      <span className="avatar avatar__sm">
                        <img src={"/default.png"} alt="User avatar" />
                      </span>
                    </div>
                    <div className="chat__contentMessItem--content">
                      <div className="chat__contentMessItem--contentWrapper">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, vel!</p>
                      </div>
                      <time className="time">10/10/10</time>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="chat__contentInput">
          <div className="chat__contentInput--file">
            <span className='chat__contentInput--attach'>
              <ImAttachment></ImAttachment>
            </span>
          </div>
          <div className="chat__contentInput--input">
            <div className="input__wrapper">
              <textarea name="" id="" cols="30" rows="2"  placeholder='Nhập nội dung chat'></textarea>
            </div>
          </div>
          <div className="chat__contentInput--btn">
            <button className='btn-send'>Gửi</button>
          </div>
        </div>
      </div>
    </div>
  )
}
