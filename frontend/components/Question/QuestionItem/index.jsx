import classNames from "classnames/bind";
import { Tooltip } from "react-tippy";
import styles from "../question.module.scss";
import Button from "~/components/Button";
import { BsCheckLg } from "react-icons/bs"
import { TiArrowUnsorted } from "react-icons/ti";
import Link from "next/link";

const cx = classNames.bind(styles);

function QuestionItem() {
  return (
    <div className={cx("question__item")}>
      <Link href="/q&a/123">
        <div className={cx("question__item--content")}>
          <h3 className={cx("question__item--author")}>Nguyen Vinh Tieng</h3>
          <h4 className={cx("question__item--title")}>Lorem ipsum dolor sit.</h4>
          <ul className={cx("question__item--tags")}>
            <li className={cx("question__item--tag")}>HTML</li>
            <li className={cx("question__item--tag")}>CSS</li>
          </ul>
          <time className={cx("question__item--time")}>3 giờ trước</time>
        </div>
      </Link>
      <div className={cx("question__item--action")}>
        <button className={cx("question__item--btncheck")}>
          <Tooltip html={ <p className="tooltip-text">Đã được giải đáp</p> } >
            <BsCheckLg/>
          </Tooltip>
        </button>
        <button className={cx("question__item--btnscore")}>
          <Tooltip html={ <p className="tooltip-text">3 điểm</p> } >
            <TiArrowUnsorted/>
          </Tooltip>
        </button>
      </div>
    </div>
  );
}

export default QuestionItem;
