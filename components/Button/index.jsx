import classNames from "classnames/bind"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

export default function Button({
  children,
  size = "sm",
  primary = false,
  secondary = false,
  rounded = false,
  className,
  ...props
}) {
  console.log(size)
  const classes = cx('wrapper', size, {
    [className]: className,
    primary,
    secondary,
    rounded,
  });
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
