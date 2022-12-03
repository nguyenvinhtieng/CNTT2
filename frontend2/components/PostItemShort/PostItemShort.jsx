import React from 'react'

export default function PostItemShort() {
  return (
    <div className='post-itemshort'>
        <div className="post-itemshort__wrapper">
            <div className="post-itemshort__thumbnail">
                <img src="https://source.unsplash.com/random" alt="" />
            </div>
            <div className="post-itemshort__content">
                <div className="post-itemshort__content--title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, architecto.
                </div>
                <div className="post-itemshort__content--desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                </div>
                <time className="post-itemshort__content--time">3 ngayf truoc</time>
                <ul className="tag-list">
                    <span className="tag-item">Html</span>
                    <span className="tag-item">Css</span>
                    <span className="tag-item">Javascript</span>
                </ul>
            </div>
        </div>
    </div>
  )
}
