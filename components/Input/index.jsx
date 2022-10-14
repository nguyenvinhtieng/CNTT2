import classNames from "classnames/bind"
import styles from "./Input.module.scss"
import { TiWarning } from "react-icons/ti"
const cx = classNames.bind(styles)

function Input({ label, type="text" ,placeholder = "", errorMessage = "",isError = false, props}) {
  let randomString = Math.random().toString(36).substring(7);
  
  return (
    <div className={cx("input__wrapper", isError ? "error" : "")}>
      {label && <label htmlFor={randomString}>{label}</label> }
      <div className={cx("input")}>
        <input type={type} id={randomString} placeholder={placeholder} {...props} />
        {isError && <TiWarning className={cx("icon")}></TiWarning> }
      </div>
      <p className={cx("error-message")}>{errorMessage}</p>
    </div>
  )
}

export default Input