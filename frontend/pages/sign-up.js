import classNames from "classnames/bind";

import styles from "~/styles/pages/Auth.module.scss";
import DefaultLayout from "~/layouts/DefaultLayout";
import Input from "~/components/Input";
import Button from "~/components/Button";
import Link from "next/link";
import { useState } from "react";

const cx = classNames.bind(styles);
const initialUserData = {
  username: {
    value: "",
    isError: false,
    errorMessage: "",
  },
  password: {
    value: "",
    isError: false,
    errorMessage: "",
  },
  confirmPassword: {
    value: "",
    isError: false,
    errorMessage: "",
  },
  email: {
    value: "",
    isError: false,
    errorMessage: "",
  },
  name: {
    value: "",
    isError: false,
    errorMessage: "",
  },
};
function SignUp() {
  const [user, setUser] = useState(initialUserData);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: {value, isError: false} });
    console.log(user);
  };
  const resetData = () => {
    setUser(initialUserData);
  }
  const handleSubmitForm = (e) => {
    let { username, password, confirmPassword, email, name } = user;
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
    if(confirmPassword.value === ""){
      confirmPassword.isError = true;
      confirmPassword.errorMessage = "Xác nhận mật khẩu không được để trống";
      setUser({ ...user, confirmPassword });
    }
    if(password.value != confirmPassword.value){
      confirmPassword.isError = true;
      confirmPassword.errorMessage = "Xác nhận mật khẩu không khớp";
      setUser({ ...user, confirmPassword });
    }
    if(email.value === ""){
      email.isError = true;
      email.errorMessage = "Email không được để trống";
      setUser({ ...user, email });
    }
    if(name.value === ""){
      name.isError = true;
      name.errorMessage = "Tên không được để trống";
      setUser({ ...user, name });
    }
    if(username.isError || password.isError || confirmPassword.isError || email.isError || name.isError){
      return;
    }
    resetData();
  };
  
  return (
    <>
      <div className={cx("wrapper")}>
        <h2>Đăng ký</h2>
        <form className={cx("form")}>
          <Input
            onChange={(e) => handleChangeInput(e)}
            value={user.username.value}
            label="Tên đăng nhập"
            name="username"
            placeholder="Tên đăng nhập . . ."
            isError={user.username.isError}
            errorMessage={user.username.errorMessage}
          />
          <Input
            onChange={(e) => handleChangeInput(e)}
            value={user.password.value}
            label="Mật khẩu"
            name="password"
            type="password"
            placeholder="Mật khẩu đăng nhập . . ."
            isError={user.password.isError}
            errorMessage={user.password.errorMessage}
          />
          <Input
            onChange={(e) => handleChangeInput(e)}
            value={user.confirmPassword.value}
            label="Nhập lại mật khẩu"
            name="confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu . . ."
            isError={user.confirmPassword.isError}
            errorMessage={user.confirmPassword.errorMessage}
          />
          <Input
            onChange={(e) => handleChangeInput(e)}
            value={user.email.value}
            label="Email"
            name="email"
            placeholder="Email của bạn . . ."
            isError={user.email.isError}
            errorMessage={user.email.errorMessage}
          />
          <Input
            onChange={(e) => handleChangeInput(e)}
            value={user.name.value}
            label="Tên"
            name="name"
            placeholder="Tên của bạn . . ."
            isError={user.name.isError}
            errorMessage={user.name.errorMessage}
          />
          <Button
            gradient
            size="md"
            style={{ width: "100%" }}
            type="button"
            onClick={handleSubmitForm}
          >
            Đăng ký tài khoản
          </Button>
        </form>
        <p>
          Bạn đã có tài khoản? Đăng nhập <Link href="sign-in">tại đây</Link>
        </p>
      </div>
    </>
  );
}

SignUp.Layout = DefaultLayout;

export default SignUp;
