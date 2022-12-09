import React from 'react'
import ChatContent from '~/components/ChatContent/ChatContent'
import ChatUsers from '~/components/ChatUsers/ChatUsers'

export default function chat() {
  const [isShowContent, setIsShowContent] = React.useState(false)
  const toggleShowContent = () => setIsShowContent(!isShowContent)

  return (
    <div className='chat'>
      <div className={`chat__user ${isShowContent ? "is-hide" : ""}`} onClick={toggleShowContent}>
        <ChatUsers></ChatUsers>
      </div>
      <div className={`chat__content ${isShowContent ? "is-show" : ""}`} onClick={toggleShowContent}>
        <ChatContent></ChatContent>
      </div>
    </div>
  )
}
