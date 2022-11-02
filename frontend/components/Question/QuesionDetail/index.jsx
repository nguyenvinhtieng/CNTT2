import classNames from "classnames/bind";
import styles from "../question.module.scss";

const cx = classNames.bind(styles);

function QuestionDetail() {
  return (
    <>
    <time className={cx("time")}>Time: 10010101010</time>
      <h1 className={cx("title")}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, eum.</h1>
      <ul className={cx("question__item--tags")}>
        <li className={cx("question__item--tag")}>HTML</li>
        <li className={cx("question__item--tag")}>CSS</li>
      </ul>
      </>
  )
}

export default QuestionDetail