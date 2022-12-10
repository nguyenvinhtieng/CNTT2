import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
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


  return (
    <div className='chat'>
      <div className={`chat__user ${isShowContent ? "is-hide" : ""}`} onClick={toggleShowContent}>
        <ChatUsers threads={chatThreads} onChangeThread={handleChangeThreadChat}></ChatUsers>
      </div>
      <div className={`chat__content ${isShowContent ? "is-show" : ""}`} onClick={toggleShowContent}>
        <ChatContent userChatNow={userChatNow} thread={chatThreadNow} content={chatContent}></ChatContent>
      </div>
    </div>
  )
}
