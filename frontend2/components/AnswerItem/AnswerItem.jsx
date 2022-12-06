import React from 'react'
import { BiDotsVerticalRounded, BiDownvote, BiUpvote } from 'react-icons/bi'
import { BsBookmarkXFill, BsFillBookmarkStarFill, BsReplyAll } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'
import { FiEdit2 } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { useDispatch } from 'react-redux'
import useOnClickOutside from '~/hooks/useClickOutside'
import { addAnswer } from '~/redux/actions/questionAction'
import Editer from '../Editer/Editer'
import Modal from '../Modal/Modal'
import TooltipMenu from '../TooltipMenu/TooltipMenu'
import UserItem from '../UserItem/UserItem'

export default function AnswerItem({answer, reply_id}) {
    const [isShowMenu, setIsShowMenu] = React.useState(false)
    const [isShowModalReply, setIsShowModalReply] = React.useState(false)
    const [replyContent, setReplyContent] = React.useState('')
    const toggleModalReply = () => setIsShowModalReply(!isShowModalReply) 
    const menuRef = React.useRef(null)
    const dispatch = useDispatch()
    const toggleShowMenu = () => {
        setIsShowMenu(!isShowMenu)
    }
    const handleChangeReplyContent = (val) => {
        setReplyContent(val)
    }
    const handleSubmitReply = () => {
        dispatch(addAnswer({question_id: answer.question_id, content: replyContent, reply_id}))
        toggleModalReply()
        setReplyContent('')
    }
    useOnClickOutside(menuRef, ()=> setIsShowMenu(false))
    let menu = [
        {
            Icon: TiTick,
            title: 'Xác nhận câu trả lời',
            clickAction: () => {}
        },
        {
            Icon: FaTimes,
            title: 'Từ chối câu trả lời',
            clickAction: () => {}
        },
        {
            Icon: BsReplyAll,
            title: 'Trả lời câu hỏi',
            clickAction: () => {}
        },
        {
            Icon: FiEdit2,
            title: 'Chỉnh sửa câu trả lời',
            clickAction: () => {}
        },
        {
            Icon: MdDeleteOutline,
            title: 'Xóa câu trả lời',
            clickAction: () => {}
        },
    ]
    return (
    <div className="answer__item">
        {isShowModalReply && <Modal title="Phản hồi câu trả lời" isShow={isShowModalReply} handleCloseModal={toggleModalReply} handleSubmit={handleSubmitReply}>
            <div className="input__wrapper">
                <label htmlFor="" className="input__label">Nhập nội dung phản hồi</label>
                <Editer onChangeFunc={handleChangeReplyContent}></Editer>
            </div>
        </Modal>}
        <div className="answer__user">
            <UserItem  UserItem user={answer?.author}></UserItem>
        </div>
        <div className="answer__content--wrapper">
            {answer?.status == "accepted" && <span className='answer__confirm'><BsFillBookmarkStarFill></BsFillBookmarkStarFill></span>}
            {answer?.status == "rejected" && <span className='answer__reject'><BsBookmarkXFill></BsBookmarkXFill></span>}
            {/* Insert danger HTML */}
            <div className="answer__content" dangerouslySetInnerHTML={{__html: answer?.content}}></div>
        </div>
        <div className="answer__actions">
            <div className="answer__actionItem">
                <div className="answer__actionItem--ico"><BiUpvote></BiUpvote></div>
                <span className='answer__actionItem--ttl'>12 Upvote</span>
            </div>
            <div className="answer__actionItem">
                <div className="answer__actionItem--ico"><BiDownvote></BiDownvote></div>
                <span className='answer__actionItem--ttl'>12 Downvote</span>
            </div>
            <div className="answer__actionItem" onClick={toggleModalReply}>
                <div className="answer__actionItem--ico"><BsReplyAll></BsReplyAll></div>
                <span className='answer__actionItem--ttl'>Phản hồi</span>
            </div>
            <div className={`answer__actionItemMenu ${isShowMenu ? "is-active" : ""}`} onClick={toggleShowMenu} ref={menuRef}>
                <div className="answer__actionItem--ico"><BiDotsVerticalRounded></BiDotsVerticalRounded></div>
                <TooltipMenu isShow={isShowMenu} menu={menu}></TooltipMenu>
            </div>
        </div>
    </div>
  )
}
