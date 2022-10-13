import classNames from "classnames/bind"
import styles from "./Input.module.scss"

const cx = classNames.bind(styles)

function Input({ label,type="text" ,placeholder = "", props}) {
  let randomString = Math.random().toString(36).substring(7);
  
  return (
    <div className={cx("input__wrapper")}>
      {label && <label htmlFor={randomString}>{label}</label> }
      <input type={type} id={randomString} placeholder={placeholder} {...props}/>
    </div>
  )
}

export default Input