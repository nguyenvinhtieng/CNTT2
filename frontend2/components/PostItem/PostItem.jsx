import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiDotsVerticalRounded, BiUpvote } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { SlFlag } from "react-icons/sl";
import { RxCopy } from "react-icons/rx";
import { BiDownvote } from "react-icons/bi";
import Link from "next/link";
import TooltipMenu from "../TooltipMenu/TooltipMenu";
import useOnClickOutside from "~/hooks/useClickOutside";
import UserItem from "../UserItem/UserItem";
const menu = [
  {
    Icon: CiBookmark,
    title: "Lưu bài viết",
    clickAction: () => {},
  },
  {
    Icon: RxCopy,
    title: "Copy liên kết chia sẻ",
    clickAction: () => {},
  },
  {
    Icon: SlFlag,
    title: "Baó cáo bài viết",
    clickAction: () => {},
  },
];
export default function PostItem() {
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  useOnClickOutside(menuRef, () => setIsShowMenu(false));
  const toggleMenu = () => setIsShowMenu(!isShowMenu);
  return (
    <li className="post-item">
      <div className="post-item__wrapper">
        <div className="post-item__head">
          <div className="post-item__user">
            <UserItem></UserItem>
          </div>
          <div className="post-item__link">
            <Link href="/post/123">
              <span className="post-item__link--ttl">Đọc bài viết</span>
              <span className="post-item__link--ico">
                <FaExternalLinkAlt></FaExternalLinkAlt>
              </span>
            </Link>
          </div>
          <div
            className={`post-item__menu ${isShowMenu ? "is-active" : ""}`}
            ref={menuRef}
          >
            <span className="post-item__menu--ico" onClick={toggleMenu}>
              <BiDotsVerticalRounded></BiDotsVerticalRounded>
            </span>
            <TooltipMenu isShow={isShowMenu} menu={menu}></TooltipMenu>
          </div>
        </div>
        <Link href="/">
          <span>
          <div className="post-item__content">
            <p className="post-item__ttl">
              With Moralis and the Python SDK, you can seamlessly integrate Web3
              functionality into any Python application. This tutorial
            </p>
            <div className="post-item__info">
              <time>3 ngày trước</time> <span> • </span>
              <span>7 phút đọc</span>
            </div>
            <div className="post-item__img">
              <img src="https://source.unsplash.com/random" alt="" />
            </div>
          </div>
          <div className="post-item__actions">
            <div className="post-item__actions--item" data-tip="Upvote">
              <span className="ico">
                <BiUpvote></BiUpvote>
              </span>
              <span className="num">7</span>
            </div>
            <div className="post-item__actions--item" data-tip="Downvote">
              <span className="ico">
                <BiDownvote></BiDownvote>
              </span>
              <span className="num">7</span>
            </div>
            <div className="post-item__actions--item" data-tip="Bình luận">
              <span className="ico">
                <RiMessage3Line></RiMessage3Line>
              </span>
              <span className="num">0</span>
            </div>
            <div className="post-item__actions--item" data-tip="Chia sẻ bài viết lên facebook">
              <span className="ico">
                <FiShare2></FiShare2>
              </span>
            </div>
          </div>
          </span>
        </Link>
      </div>
    </li>
  );
}
