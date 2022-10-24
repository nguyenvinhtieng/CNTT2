import classNames from "classnames/bind"

import styles from "~/styles/pages/Auth.module.scss"
import DefaultLayout from '~/layouts/DefaultLayout'
import Input from "~/components/Input"
import Button from "~/components/Button"
import Link from "next/link"

const cx = classNames.bind(styles)

function SignIn() {
  return (
    <>
      <div className={cx("wrapper")}>
        <h2>Đăng nhập</h2>
        <form className={cx("form")}>
          <Input label="Tên đăng nhập" name="username" isError errorMessage="Tên đăng nhập sai" placeholder="Tên đăng nhập . . ."/>
          <Input label="Mật khẩu" name="password" placeholder="Mật khẩu đăng nhập . . ."/>
          <Button gradient size="md" style={{width: "100%"}}>Đăng nhập</Button>
        </form>
        <p>Bạn chưa có tài khoản? Đăng ký <Link href="sign-up">tại đây</Link></p>

      </div>
    </>
  )
}

SignIn.Layout = DefaultLayout

export default SignIn