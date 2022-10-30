import classNames from "classnames/bind";
import styles from "../question.module.scss";
import Button from "~/components/Button";
import { AiFillCheckCircle,AiFillCloseCircle } from "react-icons/ai"

const cx = classNames.bind(styles);

function QuestionItem() {
  return (
    <div className={cx("question__item")}>
      <div className={cx("question__item--content")}>
        <h3 className={cx("question__item--author")}>Nguyen Vinh Tieng</h3>
        <h4 className={cx("question__item--title")}>Lorem ipsum dolor sit.</h4>
        <ul className={cx("question__item--tags")}>
          <li className={cx("question__item--tag")}>HTML</li>
          <li className={cx("question__item--tag")}>CSS</li>
        </ul>
        <time className={cx("question__item--time")}>3 giờ trước</time>
      </div>
      <div className={cx("question__item--action")}>
        <button className={cx("question__item--btncheck")}>
          <AiFillCheckCircle/>
        </button>
        <button className={cx("question__item--btnclose")}>
          <AiFillCloseCircle/>
        </button>
      </div>
    </div>
  );
}

export default QuestionItem;
