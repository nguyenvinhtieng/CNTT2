import classNames from "classnames/bind"

import styles from "~/styles/pages/Auth.module.scss"
import DefaultLayout from '~/layouts/DefaultLayout'
import Input from "~/components/Input"
import Button from "~/components/Button"
import Link from "next/link"

const cx = classNames.bind(styles)

function SignUp() {
  return (
    <>
      <div className={cx("wrapper")}>
        <h2>Đăng ký</h2>
        <form className={cx("form")}>
          <Input label="Tên đăng nhập" name="username" isError errorMessage="Tên đăng nhập sai" placeholder="Tên đăng nhập . . ."/>
          <Input label="Mật khẩu" name="password" placeholder="Mật khẩu đăng nhập . . ."/>
          <Input label="Nhập lại mật khẩu" name="password" placeholder="Nhập lại mật khẩu . . ."/>
          <Input label="Email" name="email" placeholder="Email của bạn . . ."/>
          <Input label="Tên" name="name" placeholder="Tên của bạn . . ."/>
          <Button gradient size="md" style={{width: "100%"}}>Đăng ký tài khoản</Button>
        </form>
        <p>Bạn đã có tài khoản? Đăng nhập <Link href="sign-in">tại đây</Link></p>
      </div>
    </>
  )
}

SignUp.Layout = DefaultLayout

export default SignUp