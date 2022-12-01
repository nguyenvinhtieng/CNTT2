import React, { useRef } from 'react'
import { TiThMenu } from 'react-icons/ti'
import TooltipMenu from '~/components/TooltipMenu/TooltipMenu'
import { CiUser } from 'react-icons/ci'
import { IoLogOutOutline } from 'react-icons/io5'
import useOnClickOutside from '~/hooks/useClickOutside'

const menuItem = [
  {
    Icon: CiUser,
    title: 'Profile',
    link: '/profile'
  },
  {
    Icon: IoLogOutOutline,
    title: 'Logout',
    link: '/profile'
  },
  {
    Icon: IoLogOutOutline,
    title: 'Logout to',
    link: '/profile'
  }
]

export default function Header({toggleSidebar}) {
  const [isShowMenu, setIsShowMenu] = React.useState(false)
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setIsShowMenu(false));
  
  return (
    <header className='header'>
      <div className="header__wrapper">
        <div className="header__btn">
          <span onClick={toggleSidebar}><TiThMenu></TiThMenu></span>
        </div>
        <div className="header__menu" ref={menuRef}>
          <span className="header__menu--info" onClick={()=>setIsShowMenu(true)}>
            <span className="header__menu--name">Tieengs Vinh NGuyen</span>
            <div className="avatar avatar__sm">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </span>
          <TooltipMenu isShow={isShowMenu} position="bottom-left" menu={menuItem}></TooltipMenu>
        </div>
      </div>
    </header>
  )
}
