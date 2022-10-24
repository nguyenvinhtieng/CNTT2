import classNames from "classnames/bind";
import Button from "~/components/Button";
import styles from "../Comment.module.scss";
const cx = classNames.bind(styles);

function CommentInput() {
  return (
    <div className={cx("comment-layout__input")}>
      <input type="text" placeholder="Nhập bình luận của bạn..." />
      <Button gradient size="md">
        <span>Lưu</span>
      </Button>
    </div>
  );
}

export default CommentInput;
