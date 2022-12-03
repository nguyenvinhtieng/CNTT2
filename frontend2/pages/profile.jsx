import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FiEdit2 } from 'react-icons/fi'
import PostItem from '~/components/PostItem/PostItem'
import PostItemShort from '~/components/PostItemShort/PostItemShort'

export default function ProfilePage() {
  return (
    <div className='profilePage'>
        <div className="profilePage__head">
            <div className="profilePage__head--avatar">
                <div className="avatar avatar__md">
                    <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="profilePage__head--changeAvatar">
                    <span className="ico"><FiEdit2></FiEdit2></span>
                    <span>Đổi ảnh đại diện</span>
                </div>
            </div>
            <div className="profilePage__head--info">
                <div className="name">Nguyen Vinh Tieng</div>
                <div className="sub">@nguyenvinhtineg</div>
                <div className="join">Tham gia vào ngày 12/12/2020</div>
                <ul className="social">
                    <li className="social__item" data-tip="trang github">
                        <Link href="/">
                            <span className='social__item--ico'><AiFillGithub></AiFillGithub></span>
                        </Link>
                    </li>
                    <li className="social__item" data-tip="trang facebook">
                        <Link href="/">
                            <span className='social__item--ico'><BsFacebook></BsFacebook></span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="profilePage__content">
            <div className="profilePage__content--interesting">
                <h2>Hứng thú với</h2>
                <ul className="tag-list">
                    <li className="tag-item">Html</li>
                    <li className="tag-item">Html</li>
                    <li className="tag-item">Html</li>
                    <li className="tag-item">Html</li>
                </ul>
            </div>
            <div className="profilePage__content--post">
                <h2>Bài viết</h2>
                    <PostItemShort></PostItemShort>
                    <PostItemShort></PostItemShort>
                    <PostItemShort></PostItemShort>
            </div>
        </div>
    </div>
  )
}
