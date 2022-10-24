import classNames from "classnames/bind"
import styles from "./Footer.module.scss"

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx("footer")}>
      Dự án công nghệ thông tin 2 đại học Tôn Đức Thắng <br />
      ABC - 51900000
    </footer>
  )
}
export default Footer
