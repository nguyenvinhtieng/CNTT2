import React, { useRef } from 'react'
import UserItem from '../UserItem/UserItem'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SlFlag } from 'react-icons/sl'
import { AiOutlineEdit } from 'react-icons/ai'
import { FiTrash } from 'react-icons/fi'
import TooltipMenu from '../TooltipMenu/TooltipMenu'
import useOnClickOutside from '~/hooks/useClickOutside'
import Modal from '../Modal/Modal'

const menu = [
  {
    Icon: AiOutlineEdit,
    title: "Sửa bình luận",
    clickAction: () => {},
  },
  {
    Icon: FiTrash,
    title: "Xóa bình luận",
    clickAction: () => {},
  },
  {
    Icon: SlFlag,
    title: "Báo cáo bình luận",
    clickAction: () => {},
  }
];

function CommentItem() {
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const [isShowModalComment, setIsShowModalComment] = React.useState(false);
  const menuRef = useRef()
  const toggleMenu = () => setIsShowMenu(!isShowMenu);
  const toggleModalComment = () => setIsShowModalComment(!isShowModalComment);
  useOnClickOutside(menuRef, () => setIsShowMenu(false))
  return (
    <>
      <li className="comment-item">
        <div className="comment-item__head">
          <div className="comment-item__user">
            <UserItem time={true}></UserItem>
          </div>
        </div>
        <div className="comment-item__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum facere deserunt!
        </div>
        <div className="comment-item__reply">
          <span className="comment-item__reply--btn" onClick={toggleModalComment}>Phản hồi bình luận này</span>
          <div className={`comment-item__actions ${isShowMenu ? 'is-active' : ""}`} ref={menuRef}>
            <span className="comment-item__options" onClick={toggleMenu}>
              <BsThreeDotsVertical></BsThreeDotsVertical>
            </span>
            <TooltipMenu menu={menu} isShow={isShowMenu}></TooltipMenu>
          </div>
        </div>
      </li>
      <Modal isShow={isShowModalComment} handleCloseModal={toggleModalComment} size="sm">
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nhập nội dung bình luận</label>
          <textarea name="" id="" rows="4" placeholder='' placeHolder="Nhập nội dung bình luận của bạn tại đây..."></textarea>
        </div>
      </Modal>
    </>
  )
}

export default CommentItem
