import classNames from "classnames/bind"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

export default function Button({
  children,
  size = "sm",
  primary = false,
  secondary = false,
  gradient = false,
  rounded = false,
  className,
  ...props
}) {
  const classes = cx('wrapper', size, {
    [className]: className,
    primary,
    secondary,
    rounded,
    gradient
  });
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
