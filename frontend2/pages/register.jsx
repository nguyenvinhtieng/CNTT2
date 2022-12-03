import Link from 'next/link'
import React from 'react'

function LoginPage() {
  return (
    <div className="container">
      <div className="auth-page">
        <h1 className='auth-page__heading'>Đăng ký </h1>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tên tài khoản</label>
          <input type="text" placeHolder='Nhập tên tài khoản của bạn...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Mật khẩu</label>
          <input type="password" placeHolder='Tạo mật khẩu của bạn...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nhập lại mật khẩu</label>
          <input type="password" placeHolder='Nhập lại mật khẩu của bạn...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tên của bạn là</label>
          <input type="text" placeHolder='Nhập tên của bạn...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Email</label>
          <input type="email" placeHolder='Nhập email của bạn...' />
        </div>
        <div className="auth-page__btn">
          <button className='button button--01'>Đăng ký</button>
        </div>
        <p className="auth-page__note">Bạn đã có tài khoản? 
          <Link href="/register">Đăng nhập tại đây</Link>
        </p>
      </div>
    </div>
  )
}
export default LoginPage