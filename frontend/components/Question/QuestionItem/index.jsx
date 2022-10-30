import classNames from "classnames/bind";
import styles from "../question.module.scss";
const cx = classNames.bind(styles);

function QuestionItem() {
  return (
    <div className={cx("question-item")}>
      <div className={cx("content")}>
        <h3 className={cx("author")}>Nguyen Vinh Tieng</h3>
        <h4 className={cx("title")}>Lorem ipsum dolor sit.</h4>
        <ul className={cx("tags")}>
          <li className={cx("tag")}>HTML</li>
          <li className={cx("tag")}>CSS</li>
        </ul>
        <time className="time">3 giờ trước</time>
      </div>
      <div className={cx("action")}>
        <button className={cx("btn")}>
          <i className="fas fa-check"></i>
        </button>
        <button className={cx("btn")}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}

export default QuestionItem;
