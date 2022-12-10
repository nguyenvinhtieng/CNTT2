import moment from "moment"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export default function ChatUsers({threads, onChangeThread}) {
  const [usersOnline, setUsersOnline] = useState([])
  const {auth, socket} = useSelector(state => state)
  const handleClickUser = (thread, userChatWith) => {
    onChangeThread(thread, userChatWith)
  }
  useEffect(()=> {
    if(Object.keys(socket).length > 0) {
      socket.on("list-user-online", data => {
        setUsersOnline(data)
      })
    }
  }, [socket])

  return (
    <div className="chat__userWrapper">
      <div className="heading">Trò chuyện</div>
      <div className="chat__userList">
        {threads.length == 0 && <p>Không có cuộc trò chuyện nào</p>}
        {threads.length > 0 && threads.map((thread, index) => {
          let userChatWith = null
          if(thread.users[0]._id == auth?.user?._id){
            userChatWith = thread.users[1]
          }
          else {
            userChatWith = thread.users[0]
          }
          return <div className="chat__userItem" key={thread._id} onClick={()=>handleClickUser(thread, userChatWith)}>
            <span className="wrapper">
              <span className="avatar avatar__sm">
                <img src={userChatWith?.avatar || "/default.png"} alt="User avatar" />
                {usersOnline.length > 0 && usersOnline.map(i =>i.user).filter(i => i._id == userChatWith._id).length > 0 && <div className="online"></div>}
              </span>
              <div className="info">
                <p className="name">
                  {userChatWith.fullname}
                  {userChatWith?.role == "admin" && <span className="tagvip">Admin</span>}
                </p>
                <div className="messWrapper">
                  <p className='mess'>{thread.last_message.content}</p>
                  <time className="timeMess">{moment(thread.updatedAt).format("LT")}</time>
                </div>
              </div>
            </span>
          </div>
        })}
        
      </div>
    </div>
  )
}
