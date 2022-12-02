import Link from 'next/link'
import React from 'react'
import { FiHome } from 'react-icons/fi'
import { HiOutlineChatAlt2, HiOutlineUsers } from 'react-icons/hi'
import { MdOutlinePostAdd } from 'react-icons/md'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

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
            <Link href="/question">
              <span className="sidebar__menu--icon"><HiOutlineChatAlt2></HiOutlineChatAlt2></span>
              <span className="sidebar__menu--ttl">Thảo luận</span>
            </Link>
          </li>
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
            <Link href="/manage/users">
              <span className="sidebar__menu--icon"><HiOutlineUsers></HiOutlineUsers></span>
              <span className="sidebar__menu--ttl">Quản lý người dùng</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/manage/posts">
              <span className="sidebar__menu--icon"><HiOutlineChatAlt2></HiOutlineChatAlt2></span>
              <span className="sidebar__menu--ttl">Quản lý bài viết</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/manage/questions">
              <span className="sidebar__menu--icon"><MdOutlinePostAdd></MdOutlinePostAdd></span>
              <span className="sidebar__menu--ttl">Quản lý câu hỏi</span>
            </Link>
          </li>
          <li className='sidebar__menu--item'>
            <Link href="/manage/reports">
              <span className="sidebar__menu--icon"><AiOutlineQuestionCircle></AiOutlineQuestionCircle></span>
              <span className="sidebar__menu--ttl">Báo cáo phản hồi</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}
