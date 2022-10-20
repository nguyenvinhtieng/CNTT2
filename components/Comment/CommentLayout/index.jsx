import classNames from "classnames/bind";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Overlay from "~/components/Overlay";
import styles from "../Comment.module.scss";
import CommentBlock from "../CommentBlock";
import CommentInput from "../CommentInput";

const cx = classNames.bind(styles);
function CommentLayout() {
  const [showComment, setShowComment] = useState(false);
  const handleToggleComment = () => setShowComment(!showComment);
  return (
    <>
      <div className={cx("comment_btn")} onClick={handleToggleComment}>
        <span>12</span> <FaRegComment />
      </div>
      <Overlay isShow={showComment} onClick={handleToggleComment} />
      <div className={cx("comment-layout", showComment ? "is-show" : "")}>
        <div className={cx("comment-layout__header")}>
          <h3>Bình luận bài viết</h3>
          <CommentInput />
        </div>
        <div className={cx("comment-layout__content")}>
          <CommentBlock />
          <CommentBlock />
          <CommentBlock />
        </div>
      </div>
    </>
  );
}
export default CommentLayout;
