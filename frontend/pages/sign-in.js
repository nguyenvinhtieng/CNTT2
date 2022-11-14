import classNames from "classnames/bind";

import styles from "~/styles/pages/Auth.module.scss";
import DefaultLayout from "~/layouts/DefaultLayout";
import Input from "~/components/Input";
import Button from "~/components/Button";
import Link from "next/link";
import { useState } from "react";

const cx = classNames.bind(styles);

function SignIn() {
  const [user, setUser] = useState({
    username: { value: "", isError: false, errorMessage: "" },
    password: { value: "", isError: false, errorMessage: "" },
  });
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: {value, isError: false} });
    console.log(user);
  };
  const handleLogin = () => {
    const { username, password } = user;
    if(username.value === ""){
      username.isError = true;
      username.errorMessage = "Tên đăng nhập không được để trống";
      setUser({ ...user, username });
    }
    if(password.value === ""){
      password.isError = true;
      password.errorMessage = "Mật khẩu không được để trống";
      setUser({ ...user, password });
    }

    if(username.value !== "" && password.value !== ""){
      console.log(user);
    }

  }
  return (
    <>
      <div className={cx("wrapper")}>
        <h2>Đăng nhập</h2>
        <form className={cx("form")}>
          <Input
            label="Tên đăng nhập"
            name="username"
            value={user.username.value}
            onChange={handleChangeInput}
            isError={user.username.isError}
            errorMessage={user.username.errorMessage}
            placeholder="Tên đăng nhập . . ."
          />
          <Input
            label="Mật khẩu"
            name="password"
            type="password"
            value={user.password.value}
            onChange={handleChangeInput}
            errorMessage={user.password.errorMessage}
            isError={user.password.isError}
            placeholder="Mật khẩu đăng nhập . . ."
          />
          <Button gradient size="md" type="button" onClick={handleLogin} style={{ width: "100%" }}>
            Đăng nhập
          </Button>
        </form>
        <p>
          Bạn chưa có tài khoản? Đăng ký <Link href="sign-up">tại đây</Link>
        </p>
      </div>
    </>
  );
}

SignIn.Layout = DefaultLayout;

export default SignIn;
