import React from "react";
import { Tooltip } from "react-tippy";
import classNames from "classnames/bind";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import styles from "../Comment.module.scss";
const cx = classNames.bind(styles);

function TooltipComment() {
  return (
    <Tooltip
      trigger="click"
      interactive
      html={
        <div className={cx("tooltip-wrapper")}>
          <div className={cx("tooltip-wrapper__item")}>
            <MdModeEditOutline />
            <span>Chỉnh sửa</span>
          </div>
          <div className={cx("tooltip-wrapper__item")}>
            <MdDelete />
            <span>Xóa</span>
          </div>
        </div>
      }
    >
      <BiDotsHorizontalRounded />
    </Tooltip>
  );
}

export default TooltipComment;
