import classNames from "classnames/bind"

import styles from "~/styles/pages/Auth.module.scss"
import DefaultLayout from '~/layouts/DefaultLayout'
import Input from "~/components/Input"

const cx = classNames.bind(styles)

function SignIn() {
  return (
    <>
      <div className={cx("wrapper")}>
        <h2>SignIn</h2>
        <Input label="Tên đăng nhập" name="username"/>
      </div>
    </>
  )
}

SignIn.Layout = DefaultLayout

export default SignIn