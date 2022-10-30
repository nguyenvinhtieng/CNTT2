import classNames from "classnames/bind";
import styles from "../question.module.scss";
import QuestionItem from "../QuestionItem";
const cx = classNames.bind(styles);

function QuestionLayout() {
  return (
    <div className={cx("question__layout")}>
      <QuestionItem></QuestionItem>
      <QuestionItem></QuestionItem>
      <QuestionItem></QuestionItem>
    </div>
  );
}
export default QuestionLayout;
