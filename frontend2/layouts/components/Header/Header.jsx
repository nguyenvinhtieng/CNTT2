import React, { useRef } from "react";
import { TiThMenu } from "react-icons/ti";
import TooltipMenu from "~/components/TooltipMenu/TooltipMenu";
import { CiUser } from "react-icons/ci";
import { IoLogOutOutline, IoLogInOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";
import useOnClickOutside from "~/hooks/useClickOutside";

const menuItem = [
  {
    Icon: CiUser,
    title: "Trang cá nhân",
    link: "/profile",
  },
  {
    Icon: IoLogInOutline,
    title: "Đăng nhập",
    link: "/login",
  },
  {
    Icon: MdOutlineAssignment,
    title: "Đăng ký",
    link: "/login",
  },
  {
    Icon: IoLogOutOutline,
    title: "Logout",
    link: "/profile",
  },
];

export default function Header({ toggleSidebar }) {
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setIsShowMenu(false));

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__btn">
          <span onClick={toggleSidebar}>
            <AiOutlineMenu></AiOutlineMenu>
          </span>
        </div>
        <div className="header__menu" ref={menuRef}>
          <span
            className="header__menu--info"
            onClick={() => setIsShowMenu(true)}
          >
            <span className="header__menu--name">Tieengs Vinh NGuyen</span>
            <div className="avatar avatar__sm">
              <img src="https://source.unsplash.com/random" alt="" />
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
