import classNames from "classnames/bind";
import styles from "../Comment.module.scss";
import CommentInput from "../CommentInput";
import CommentItem from "../CommentItem";
const cx = classNames.bind(styles);

function CommentBlock() {
  return (
    <div className={cx("comment-block")}>
      <div className={cx("comment-block__head")}>
        <CommentItem />
      </div>
      <div className={cx("comment-block__reply")}>
        <CommentItem />
        <CommentItem />
      </div>
      <div className={cx("comment-block__input")}>
        <CommentInput />
      </div>
    </div>
  );
}
export default CommentBlock;
