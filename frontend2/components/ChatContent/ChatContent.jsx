import { ImAttachment } from 'react-icons/im'
import UserItem from '../UserItem/UserItem'

export default function ChatContent() {
  return (
    <>
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
    </>
  )
}
