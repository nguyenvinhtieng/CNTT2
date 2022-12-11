import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ChatContent from '~/components/ChatContent/ChatContent'
import ChatUsers from '~/components/ChatUsers/ChatUsers'
import displayToast from '~/utils/displayToast'
import { getMethod, postMethod } from '~/utils/fetchData'

export default function chat() {
  const [isShowContent, setIsShowContent] = React.useState(false)
  const [chatThreads, setChatThreads] = React.useState([])
  const [chatThreadNow, setChatThreadNow] = React.useState(null)
  const [chatContent, setChatContent] = React.useState([])
  const [userChatNow, setUserChatNow] = React.useState({})
  const toggleShowContent = () => setIsShowContent(!isShowContent)
  const router = useRouter()
  const socket = useSelector(state => state.socket)
  const getAllChatThreads = async() => {
    const res = await getMethod("chat/get-all-thread")
    const { data } = res
    if(data) {
      const threads = data.data
      threads.sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt)
      })
      setChatThreads(threads)
    }else {
      displayToast("error", data.message)
    }
  }
  useEffect(() => {
    getAllChatThreads()
  },[])
  // check is chat with user
  const fetchChatWithUser = async ({user_slug}) => {
    const res = await postMethod("chat/get-chat-with-user", { user_slug })
    const { data } = res
    if(data.status) {
      setUserChatNow(data.user)
      setChatThreadNow(data.chat_thread)
      setChatContent(data.data)
    }else {
      displayToast("error", data.message)
    }
  }

  const handleChangeThreadChat = async (thread, user) => {
    setChatThreadNow(thread)
    console.log("click: ", thread)
    setUserChatNow(user)
    const res = await postMethod("chat/get-chat-of-thread", { chat_thread_id: thread._id })
    const { data } = res
    if(data.status) {
      setChatContent(data.data)
    }else {
      displayToast("error", data.message)
    }
  }
  // case start chat at user profile
  useEffect(() => {
    const { asPath } = router
    const user = asPath.split("/chat?user=")[1]
    if(user) {
      fetchChatWithUser({user_slug: user})
    }
  },[])

  // socket handler
  useEffect(()=> {
    if(Object.keys(socket).length > 0) {
      socket.on("new-message", ({chat, thread}) => {
        console.log("thread now: ", chatThreadNow)
        console.log("thread send: ", thread)
        if(chatThreadNow?._id == thread._id) {
          setChatContent(prevChatConent => [chat, ...prevChatConent])
        }
        let isExitstThread = false;
        chatThreads.forEach(item => {
          if(item._id == thread._id) {
            isExitstThread = true
          }
        })
        if(isExitstThread) {
          setChatThreads(prevThreads => prevThreads.map(item => item._id == thread._id ? thread : item))
        }else {
          setChatThreads(prevThreads => [thread, ...prevThreads])
        }
      })
    }
  }, [socket, chatThreadNow, chatThreads])

  return (
    <div className='chat'>
      <div className={`chat__user ${isShowContent ? "is-hide" : ""}`} onClick={toggleShowContent}>
        <ChatUsers threads={chatThreads} onChangeThread={handleChangeThreadChat}></ChatUsers>
      </div>
      <div className={`chat__content ${isShowContent ? "is-show" : ""}`} onClick={toggleShowContent}>
        <ChatContent userChatNow={userChatNow} thread={chatThreadNow} content={chatContent} setContent={setChatContent} setThread={setChatThreads}></ChatContent>
      </div>
    </div>
  )
}
