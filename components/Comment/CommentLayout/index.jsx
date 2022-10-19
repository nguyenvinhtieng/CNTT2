import classNames from "classnames/bind"
import { FaRegComment } from "react-icons/fa";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Overlay from "~/components/Overlay";
import styles from "../Comment.module.scss"
import CommentItem from "../CommentItem";
const cx = classNames.bind(styles)
function CommentLayout() {
  return (
    <>
    <div className={cx("comment_btn")}>
      <span>12</span> <FaRegComment />
    </div>
    <Overlay isShow={true}/>
    <div className={cx("comment-layout")}>
      <div className={cx("comment-layout__header")}>
        <h3>Bình luận bài viết</h3>
        <div className={cx("comment-layout__input")}>
          <input type="text" placeholder="Nhập bình luận của bạn..." />
          <Button gradient size="md">Lưu </Button>
        </div>
      </div>
      <div className={cx("comment-layout__content")}>
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </div>
    </div>
    </>
  )
}
export default CommentLayout