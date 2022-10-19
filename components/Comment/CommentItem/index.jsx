import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind"
import { BiDotsHorizontalRounded } from "react-icons/bi";
import styles from "../Comment.module.scss"
const cx = classNames.bind(styles)

function CommentItem() {
  return (
    <div className={cx("comment-layout__item")}>
      <div className={cx("comment-layout__item--name")}>
        Nguyễn Vinh Tiếng
      </div>
      <div className={cx("comment-layout__item--content")}>
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </div>
      <div className={cx("comment-layout__item--bot")}>
        <div className={cx("like")}>Thích</div>
        <div className={cx("reply")}>Phản hồi</div>
        <span>1 giờ trước</span>
        <span className={cx("utils")}><BiDotsHorizontalRounded /></span>
      </div>
    </div>
  )
}
export default CommentItem