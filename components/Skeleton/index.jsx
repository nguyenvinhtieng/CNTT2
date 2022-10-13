import classNames from "classnames/bind";
import styles from "./Skeleton.module.scss";

const cx = classNames.bind(styles);

function Skeleton({width = 0, height = 0, radius = 0, marginBottom = 0}) {
  const styles = {
    width: width, 
    height: height,
    borderRadius: radius,
    marginBottom: marginBottom,
  }
  return (
    <div style={styles} className={cx("skeleton")}></div>
  )
}

export default Skeleton;