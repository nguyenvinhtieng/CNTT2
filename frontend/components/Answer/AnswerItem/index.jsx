import classNames from "classnames/bind"
import styles from "../answer.module.scss"
import { Tooltip } from "react-tippy";
const cx = classNames.bind(styles)
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai"
import { TiTick } from "react-icons/ti";

function AnswerItem() {
  return (
    <div className={cx("answer__item")}>
      <div className={cx("answer__item--vote")}>
        <div className={cx("answer__item--vote__up")}>
          <Tooltip html={ <p className="tooltip-text">Câu trả lời này hữu ích</p> } >
            <AiFillCaretUp />
          </Tooltip>
        </div>
        <div className={cx("answer__item--vote__number")}>
          <div className={cx("answer__item--vote__tick")}>
            <Tooltip html={ <p className="tooltip-text">Câu trả lời đã được xác minh</p> } >
              <TiTick />
            </Tooltip>
          </div>
          0  
        </div>
        <div className={cx("answer__item--vote__down")}>
          <Tooltip html={ <p className="tooltip-text">Câu trả lời này không hữu ích</p> } >
            <AiOutlineCaretDown />
          </Tooltip>
        </div>
      </div>
      <div className={cx("answer__item--vote")}>
       
      </div>
      <div className={cx("answer__item--content")}>
        <div className={cx("answer__item--author")}>
          Nguyen Vinh Tieng
        </div>
        <div className={cx("answer__item--text")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
        </div>
        <div className={cx("answer__item--time")}>
          3 giờ trước
        </div>
      </div>
    </div>
  )
}
export default AnswerItem