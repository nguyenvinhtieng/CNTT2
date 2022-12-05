import React from 'react'
import { BiChat } from 'react-icons/bi'
import { TiTick } from 'react-icons/ti'
import UserItem from '../UserItem/UserItem'

export default function QuestionItem() {
  return (
    <li className="question__item">
        <UserItem avatar={"/default.png"} name={"Tieng"} time={new Date()}></UserItem>
        <div className="question__item--ttl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias cum, inventore totam veniam commodi amet saepe vitae natus minima cumque?
        </div>
        <ul className="tag-list">
            <li className="tag-item">HTML</li>
            <li className="tag-item">HTML</li>
            <li className="tag-item">HTML</li>
        </ul>
        <div className="question__item--info">
            <span className="question__item--infoItem">
                <span className="ico"><BiChat></BiChat></span>
                <span className='num'>100 câu trả lời</span>
            </span>
            <span className="question__item--infoItem is-active">
                <span className="ico"><TiTick></TiTick></span>
                <span>Đã được giải đáp</span>
            </span>
        </div>
    </li>
  )
}
