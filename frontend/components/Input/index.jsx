import classNames from "classnames/bind"
import styles from "./Input.module.scss"
import { TiWarning } from "react-icons/ti"
const cx = classNames.bind(styles)

function Input({ label, type="text", errorMessage = "",isError = false, ...props}) {
  return (
    <div className={cx("input__wrapper", isError ? "error" : "")}>
      {label && <label>{label}</label> }
      <div className={cx("input")}>
        <input type={type} {...props} />
        {isError && <TiWarning className={cx("icon")}></TiWarning> }
      </div>
      <p className={cx("error-message")}>{errorMessage}</p>
    </div>
  )
}

export default Input