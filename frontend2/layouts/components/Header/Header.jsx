import React, { useRef } from "react";
import { TiThMenu } from "react-icons/ti";
import TooltipMenu from "~/components/TooltipMenu/TooltipMenu";
import { CiUser } from "react-icons/ci";
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";
import useOnClickOutside from "~/hooks/useClickOutside";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import Modal from "~/components/Modal/Modal";

export default function Header({ toggleSidebar }) {
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const [user, setUser] = React.useState(null);
  const menuRef = useRef();
  const auth = useSelector((state) => state.auth);
  const [isShowModalChangePass, setIsShowModalChangePass] = React.useState(false);
  const toggleModalChangePass = () => setIsShowModalChangePass(!isShowModalChangePass);
  useOnClickOutside(menuRef, () => setIsShowMenu(false));
  let menuItem = null
  const passwordNewRef = useRef()
  const passwordNewConfirmRef = useRef()

  const changePass = async () => {

  }

  const menuItemLogined = [
    {
      Icon: CiUser,
      title: "Trang cá nhân",
      link: "/profile",
    },
    {
      Icon: RiLockPasswordLine,
      title: "Đổi mật khẩu",
      clickAction: () => {
        setIsShowMenu(false)
        toggleModalChangePass()
      },
    },
    {
      Icon: IoLogOutOutline,
      title: "Đăng xuất",
      link: "/logout",
    },
  ];
  const menuItemNotLogined = [
    {
      Icon: IoLogInOutline,
      title: "Đăng nhập",
      link: "/login",
    },
    {
      Icon: MdOutlineAssignment,
      title: "Đăng ký",
      link: "/register",
    }
  ];
  if(auth.isAuthenticated) {
    menuItem = menuItemLogined
    menuItem[0].link = `/@${auth?.user?.profileSlug}`
  }else {
    menuItem = menuItemNotLogined
  }
  useEffect(()=> {
    if(auth.isAuthenticated) {
      setUser(auth.user)
    }else {
      setUser(null)
    }
  }, [auth])
  return (
    <header className="header">
      <Modal title="Đổi mật khẩu tài khoản" handleCloseModal={toggleModalChangePass} handleSubmit={changePass} size="sm" isShow={isShowModalChangePass} >
        <div className="input__wrapper">
          <label htmlFor="" className="input__label">Nhập mật khẩu mới</label>
          <input type="password" placeholder="Nhập mật khẩu mới" ref={passwordNewRef} />
        </div>
        <div className="input__wrapper">
          <label htmlFor="" className="input__label">Nhập lại mật khẩu mới</label>
          <input type="password" placeholder="Nhập lại mật khẩu" ref={passwordNewConfirmRef} />
        </div>
      </Modal>
      <div className="header__wrapper">
        <div className="header__btn">
          <span onClick={toggleSidebar}>
            <AiOutlineMenu></AiOutlineMenu>
          </span>
        </div>
        <div className="header__menu" ref={menuRef}>
          <span
            className="header__menu--info"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <span className="header__menu--name">{user?.fullname || "Anonymous"}</span>
            <div className="avatar avatar__sm">
              <img src={user?.avatar || "/default.png"} alt="User avatar" />
            </div>
          </span>
          <TooltipMenu
            isShow={isShowMenu}
            position="bottom-left"
            menu={menuItem}
          ></TooltipMenu>
        </div>
      </div>
    </header>
  );
}


