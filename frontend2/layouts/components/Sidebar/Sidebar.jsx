import Link from 'next/link'
import React from 'react'
import { FiHome, FiUsers } from 'react-icons/fi'
import { HiOutlineChatAlt2, HiOutlineNewspaper, HiOutlineUsers } from 'react-icons/hi'
import { MdOutlinePostAdd, MdOutlineArticle, MdOutlineReport } from 'react-icons/md'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrArticle } from 'react-icons/gr'
import { BsBookmark, BsInfoLg, BsQuestionSquare } from 'react-icons/bs'
import { VscQuestion } from 'react-icons/vsc'
import { RiLogoutBoxRLine } from 'react-icons/ri'
export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar scroll-css ${isOpen ? "is-open" : ""}`}>
      <div className="sidebar__wrapper">
        <p className="sidebar__ttl">Khám phá</p>
        <ul className="sidebar__menu">
          <li className='sidebar__menu--item'>
            <Link href="/">
              <span className="sidebar__menu--icon"><FiHome></FiHome></span>
              <span className="sidebar__menu--ttl">Bài viết mới nhất</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/questions">
              <span className="sidebar__menu--icon"><HiOutlineChatAlt2></HiOutlineChatAlt2></span>
              <span className="sidebar__menu--ttl">Hỏi đáp</span>
            </Link>
          </li>
        </ul>
        <p className="sidebar__ttl">Chia sẻ</p>
        <ul className="sidebar__menu">
          <li className='sidebar__menu--item'>
            <Link href="/post/create">
              <span className="sidebar__menu--icon"><MdOutlinePostAdd></MdOutlinePostAdd></span>
              <span className="sidebar__menu--ttl">Tạo bài viết</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/question/create">
              <span className="sidebar__menu--icon"><AiOutlineQuestionCircle></AiOutlineQuestionCircle></span>
              <span className="sidebar__menu--ttl">Tạo câu hỏi thảo luận</span>
            </Link>
          </li>
        </ul>
        <p className="sidebar__ttl">Quản lý</p>
        <ul className="sidebar__menu">
          <li className='sidebar__menu--item'>
            <Link href="/my-post">
              <span className="sidebar__menu--icon"><MdOutlineArticle></MdOutlineArticle></span>
              <span className="sidebar__menu--ttl">Bài viết của tôi</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/my-question">
              <span className="sidebar__menu--icon"><VscQuestion></VscQuestion></span>
              <span className="sidebar__menu--ttl">Câu hỏi của tôi</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/saved">
              <span className="sidebar__menu--icon"><BsBookmark></BsBookmark></span>
              <span className="sidebar__menu--ttl">Bài viết đã lưu</span>
            </Link>
          </li>
        </ul>
        <p className="sidebar__ttl">Quản trị</p>
        <ul className="sidebar__menu">
          <li className='sidebar__menu--item'>
            <Link href="/manage/users">
              <span className="sidebar__menu--icon"><FiUsers></FiUsers></span>
              <span className="sidebar__menu--ttl">Quản lý người dùng</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/manage/posts">
              <span className="sidebar__menu--icon"><HiOutlineNewspaper></HiOutlineNewspaper></span>
              <span className="sidebar__menu--ttl">Quản lý bài viết</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/manage/questions">
              <span className="sidebar__menu--icon"><BsQuestionSquare></BsQuestionSquare></span>
              <span className="sidebar__menu--ttl">Quản lý câu hỏi</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/">
              <span className="sidebar__menu--icon"><MdOutlineReport></MdOutlineReport></span>
              <span className="sidebar__menu--ttl">Báo cáo người dùng</span>
            </Link>
          </li>
        </ul>
        <p className="sidebar__ttl">Cá nhân</p>
        <ul className="sidebar__menu">
          <li className='sidebar__menu--item'>
            <Link href="/my-post">
              <span className="sidebar__menu--icon"><BsInfoLg></BsInfoLg></span>
              <span className="sidebar__menu--ttl">Thông tin cá nhân</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/logout">
              <span className="sidebar__menu--icon"><RiLogoutBoxRLine></RiLogoutBoxRLine></span>
              <span className="sidebar__menu--ttl">Đăng xuất</span>
            </Link>
          </li>
        </ul>
        
      </div>
    </aside>
  )
}
