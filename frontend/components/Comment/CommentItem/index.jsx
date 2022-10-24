import classNames from "classnames/bind";
import styles from "../Comment.module.scss";
import TooltipComment from "./TooltipComment";
const cx = classNames.bind(styles);

function CommentItem() {
  return (
    <div className={cx("comment-layout__item")}>
      <div className={cx("comment-layout__item--name")}>Nguyễn Vinh Tiếng</div>
      <div className={cx("comment-layout__item--content")}>
        <div className={cx("comment-layout__item--tag")}>@NguyenVinhTieng</div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
      </div>
      <div className={cx("comment-layout__item--bot")}>
        <div className={cx("like")}>Thích</div>
        <div className={cx("reply")}>Phản hồi</div>
        <span>1 giờ trước</span>
        <span className={cx("utils")}>
          <TooltipComment />
        </span>
      </div>
    </div>
  );
}

export default CommentItem;
