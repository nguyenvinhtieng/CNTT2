import React from "react";
import moment from 'moment'
import { FaExternalLinkAlt } from "react-icons/fa";
import { BiDotsVerticalRounded, BiUpvote } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";
import { FiFacebook, FiShare2 } from "react-icons/fi";
import { FacebookShareButton } from 'next-share';
import { CiBookmark } from "react-icons/ci";
import { SlFlag } from "react-icons/sl";
import { RxCopy } from "react-icons/rx";
import { BiDownvote } from "react-icons/bi";
import Link from "next/link";
import TooltipMenu from "../TooltipMenu/TooltipMenu";
import useOnClickOutside from "~/hooks/useClickOutside";
import UserItem from "../UserItem/UserItem";
import { useRouter } from "next/router";
import displayToast from "~/utils/displayToast";

export default function PostItem({post}) {
  const [isShowMenu, setIsShowMenu] = React.useState(false);
  const menuRef = React.useRef(null);
  useOnClickOutside(menuRef, () => setIsShowMenu(false));
  const toggleMenu = () => setIsShowMenu(!isShowMenu);
  const menu = [
    {
      Icon: FiFacebook,
      title: "Chia sẻ bài viết lên facebook",
      clickAction: () => {},
      Wrapper: FacebookShareButton,
      wrapperProps: {url: `${window.location.origin}/post/${post?.slug}`},
    },
    {
      Icon: RxCopy,
      title: "Copy liên kết chia sẻ",
      clickAction: () => copyLink(),
    },
    {
      Icon: SlFlag,
      title: "Baó cáo bài viết",
      clickAction: () => {},
    },
  ];
  const copyLink = () => {
    navigator.clipboard.writeText(`${window.location.origin}/post/${post?.slug}`);
    setIsShowMenu(false);
    displayToast("success", "Đã sao chép liên kết");
  }
  return (
    <li className="post-item">
      <div className="post-item__wrapper">
        <div className="post-item__head">
          <div className="post-item__user">
            <UserItem user={post.author} time={post.createdAt}></UserItem>
          </div>
          <div className="post-item__link">
            <Link href={`/post/${post.slug || ""}`}>
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
        <Link href={`/post/${post?.slug || ""}`}>
          <span>
          <div className="post-item__content">
            <p className="post-item__ttl">{post?.title}</p>
            <div className="post-item__info">
              <time>{moment(post?.createdAt).startOf('hour').fromNow()}</time> <span> • </span>
              <span>{Math.floor(post?.content.length / 200) + 1} phút đọc</span>
            </div>
            <div className="post-item__img">
              <img src={post?.thumbnail || "/default.png"} alt="" />
            </div>
          </div>
          <div className="post-item__actions">
            <div className="post-item__actions--item" data-tip="Upvote">
              <span className="ico">
                <BiUpvote></BiUpvote>
              </span>
              <span className="num">
                {post.votes.reduce((total, item)=>{
                  if(item.type == "upvote") return total + 1
                  return total
                }, 0)}
              </span>
            </div>
            <div className="post-item__actions--item" data-tip="Downvote">
              <span className="ico">
                <BiDownvote></BiDownvote>
              </span>
              <span className="num">
                {post.votes.reduce((total, item)=>{
                  if(item.type == "downvote") return total + 1
                  return total
                }, 0)}
              </span>
            </div>
            <div className="post-item__actions--item" data-tip="Bình luận">
              <span className="ico">
                <RiMessage3Line></RiMessage3Line>
              </span>
              <span className="num">{post.comments.length}</span>
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
