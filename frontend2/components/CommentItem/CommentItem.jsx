import React, { useRef } from 'react'
import UserItem from '../UserItem/UserItem'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SlFlag } from 'react-icons/sl'
import { AiOutlineEdit } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import TooltipMenu from '../TooltipMenu/TooltipMenu'
import useOnClickOutside from '~/hooks/useClickOutside'
import Modal from '../Modal/Modal'
import displayToast from '~/utils/displayToast'
import { useDispatch, useSelector } from 'react-redux'
import { commentPost, deleteComment, updateComment } from '~/redux/actions/postActions'
import { useEffect } from 'react'
  

function CommentItem({comment, reply_for}) {
  const auth = useSelector((state) => state.auth);
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const [isShowModalComment, setIsShowModalComment] = React.useState(false);
  const [isShowModalDelete, setIsShowModalDelete] = React.useState(false)
  const [isShowModalEditComment, setIsShowModalEditComment] = React.useState(false)

  const menuRef = useRef()
  const inputReply = useRef()
  const inputEditRef = useRef()
  const [menu, setMenu] = React.useState([])
  const dispatch = useDispatch()
  const toggleMenu = () => setIsShowMenu(!isShowMenu);
  const toggleModalComment = () => setIsShowModalComment(!isShowModalComment);
  const toggleModalDeleteComment = () => setIsShowModalDelete(!isShowModalDelete)

  const replyComment = () => {
    let val = inputReply.current.value;
    if(!val) {
      displayToast("warning", "Vui lòng nhập nội dung bình luận");
      return;
    }
    dispatch(commentPost({post_id: comment.post_id, content: val, reply_id: reply_for}));
    toggleModalComment();
  }
  const toggleModalEditComment = () => setIsShowModalEditComment(!isShowModalEditComment)
  const clickEditCommentBtn = () => {
    toggleModalEditComment();
    inputEditRef.current.value = comment.content;
  }
  const updateCommentHandler = () => {
    const val = inputEditRef.current.value;
    if(!val) {
      displayToast("warning", "Vui lòng nhập nội dung bình luận");
      return;
    }
    dispatch(updateComment({comment_id: comment._id, content: val}));
    toggleModalEditComment();
  }
  useEffect(()=> {
    let menuNew = [
      {
        Icon: SlFlag,
        title: "Báo cáo bình luận",
        clickAction: () => {},
      }
    ];
    if(comment.author._id === auth.user._id || auth.isAdmin){
      menuNew = [
        {
          Icon: AiOutlineEdit,
          title: "Sửa bình luận",
          clickAction: () => clickEditCommentBtn(),
        },
        {
          Icon: FiTrash,
          title: "Xóa bình luận",
          clickAction: ()=> toggleModalDeleteComment(),
        },
        ...menuNew
      ];
    }
    setMenu(menuNew);
  }, [auth, comment])
  
  useOnClickOutside(menuRef, () => setIsShowMenu(false))
  const deleteCommentHandler =() => {
    dispatch(deleteComment({comment_id: comment._id}))
  }

  return (
    <>
      <li className="comment-item">
        <div className="comment-item__head">
          <div className="comment-item__user">
            <UserItem avatar={comment?.author?.avatar || "/default.png"} name={comment?.author?.fullname} username={comment?.author?.username} time={comment?.createdAt}></UserItem>
          </div>
        </div>
        <div className="comment-item__content">{comment.content}</div>
        <div className="comment-item__reply">
          <span className="comment-item__reply--btn" onClick={toggleModalComment}>Phản hồi</span>
          <div className={`comment-item__actions ${isShowMenu ? 'is-active' : ""}`} ref={menuRef}>
            <span className="comment-item__options" onClick={toggleMenu}>
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </span>
            <TooltipMenu menu={menu} isShow={isShowMenu}></TooltipMenu>
          </div>
        </div>
      </li>
      <Modal isShow={isShowModalComment} handleCloseModal={toggleModalComment} size="sm" title="Phản hồi bình luận" handleSubmit={replyComment}>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nhập nội dung bình luận</label>
          <textarea name="" id="" rows="4" placeholder="Nhập nội dung bình luận của bạn tại đây..." ref={inputReply}></textarea>
        </div>
      </Modal>
      <Modal title="Bạn có chắc muốn xóa bình luận này" handleCloseModal={toggleModalDeleteComment} handleSubmit={deleteCommentHandler} isShow={isShowModalDelete} size="sm" danger={true}>
        <span>Bạn có chắc muốn xóa bình luận này</span>
      </Modal>

      <Modal isShow={isShowModalEditComment} handleCloseModal={toggleModalEditComment} size="sm" title="Sửa nội dung bình luận" handleSubmit={updateCommentHandler}>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nhập nội dung bình luận...</label>
          <textarea name="" id="" rows="4" placeholder="Nhập nội dung bình luận của bạn tại đây..." ref={inputEditRef}></textarea>
        </div>
      </Modal>
    </>
  )
}

export default CommentItem
