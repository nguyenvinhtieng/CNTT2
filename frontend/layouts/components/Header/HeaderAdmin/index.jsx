import classNames from "classnames/bind"
import Link from "next/link"
import { useRouter } from "next/router";
import { FaTimes } from "react-icons/fa"
import { TiThMenu } from "react-icons/ti"

import Button from "~/components/Button";
import styles from "../Header.module.scss"

const cx = classNames.bind(styles)

function Header() {
  const router = useRouter();
  return (
    <header className={cx("header")}>
      <div className={cx("header__wrapper")}>
        
        <input type="checkbox" id="menu" className={cx("header__toggle--input")}  hidden/>
        <label htmlFor="menu" className={cx("header__overlay")}></label>
        <label htmlFor="menu" className={cx("header__toggle")} ><TiThMenu /></label>

        <nav className={cx("header__nav")}>
          <label htmlFor="menu" className={cx("header__close")}><FaTimes /></label>
          <Link href="/admin/post">
            <span className={cx("header__item", router.pathname == "/admin/post" ? "header__item--active" : "")}>Quản lý bài viết</span>
          </Link>
          <Link href="/admin/question">
            <span className={cx("header__item", router.pathname == "/admin/question" ? "header__item--active" : "")}>Quản lý hỏi đáp</span>
          </Link>
        </nav>

        <div className={cx("header__auth")}>
          <Link href="/sign-up">
            <Button secondary rounded size="md">Đăng Ký</Button>
          </Link>
          <Link href="/sign-in">
            <Button primary rounded size="md">Đăng nhập</Button>
          </Link>
        </div>
        
      </div>
    </header>
  )
}
export default Header