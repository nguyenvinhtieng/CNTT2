import classNames from "classnames/bind"
import styles from "./Overlay.module.scss"

const cx = classNames.bind(styles)

export default function Overlay({isShow, onClick, isShowPc = true}) {
  return (
    <div onClick={onClick} className={cx("overlay", isShow ? "is-show" : "", isShowPc ? "" : "not-show-pc")}></div>
  )
}
