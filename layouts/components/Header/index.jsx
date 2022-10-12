import classNames from "classnames/bind"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router";
import Button from "~/components/Button";

import imageLoader from "~/utils/imageloader"
import styles from "./Header.module.scss"

const cx = classNames.bind(styles)

function Header() {
  const router = useRouter();

  return (
    <header className={cx("header")}>
      <div className={cx("header__wrapper")}>
        <Link href="/" className={cx("header__logo")}>
          <Image loader={imageLoader}
            src="/logo.png"
            alt="Website Logo"
            width={80}
            height={40} />
        </Link>
        <nav className={cx("header__nav")}>
          <Link href="/newsfeed">
            <span className={cx("header__item", router.pathname == "/" ? "header__item--active" : "")}>Newsfeed</span>
          </Link>
          <Link href="/q&a">
            <span className={cx("header__item", router.pathname == "/q&a" ? "header__item--active" : "")}>Q&A</span>
          </Link>
        </nav>
        <div className={cx("header__auth")}>
          <Link href="/sign-up">
            <Button secondary rounded size="md">SignUp</Button>
          </Link>
          <Link href="/sign-in">
            <Button primary rounded size="md">SignIn</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header
