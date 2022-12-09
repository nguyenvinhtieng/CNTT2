import Link from 'next/link'
import React, { useRef } from 'react'
import { useRouter } from 'next/router';
import { connect, useDispatch } from 'react-redux'
import displayToast from '~/utils/displayToast'
import { userLogin } from '~/redux/actions/authActions'

function LoginPage() {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const router = useRouter();
  const dispatch = useDispatch()
  const handleSubmitLogin = async () => {
    // do something
    let username = usernameRef.current.value
    let password = passwordRef.current.value
    if(!username || !password) {
      displayToast("error", "Vui lòng điền đầy đủ thông tin");
      return;
    }
    dispatch(userLogin({username, password, router}));
  }
  return (
    <div className="container">
      <div className="auth-page">
        <h1 className='auth-page__heading'>Đăng nhập </h1>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tên tài khoản</label>
          <input ref={usernameRef} type="text" placeholder='Nhập tên tài khoản của bạn...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Mật khẩu</label>
          <input ref={passwordRef} type="password" placeholder='Nhập mật khẩu của bạn...' />
        </div>
        <div className="auth-page__btn">
          <button className='button button--01' onClick={handleSubmitLogin}>Đăng nhập</button>
        </div>
        <p className="auth-page__note">Bạn chưa có tài khoản? 
          <Link href="/register">Đăng ký tại đây</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
