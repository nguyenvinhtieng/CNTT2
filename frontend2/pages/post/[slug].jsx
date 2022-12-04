
import React, { useEffect } from "react";
import moment from 'moment'
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { BiDownvote, BiShareAlt, BiUpvote } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";
import CommentThread from "~/components/CommentThread/CommentThread";
import Modal from "~/components/Modal/Modal";
import PostItem from "~/components/PostItem/PostItem";
import UserItem from "~/components/UserItem/UserItem";
import { getMethod } from "~/utils/fetchData";
import { commentPost, votePost } from "~/redux/actions/postActions";
import displayToast from "~/utils/displayToast";
import PostCommentBlock from "~/components/PostCommentBlock/PostCommentBlock";

export default function PostDetail() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [post, setPost] = React.useState(null);
  const [isShowModalAddComment, setIsShowModalAddComment] = React.useState(false);
  const inputAddCommentRef = React.useRef(null);
  const posts = useSelector((state) => state.posts);
  const auth = useSelector((state) => state.auth);

  const router = useRouter();
  const dispatch = useDispatch();
  const { slug } = router.query;
  const replyidRef = React.useRef(null); 
  const vote = (type) => {
    dispatch(votePost({ type, post_id: post._id }));
  }
  useEffect(()=>{
    let postState = posts.data.find((p) => p.slug === slug);
    if(postState){
      setPost(postState);
      setIsLoaded(true);
    }else {
      if(slug){
        getMethod("post/" + slug).then((res) => {
          const { data } = res;
          if(data.status){
            setPost(data.post);
            setIsLoaded(true);
          }else {
            router.push("/");
          }
        });
      }
    }
  },[post, posts, slug])

  const toggleModalAddComment = () => setIsShowModalAddComment(!isShowModalAddComment);
  const addComment = () => {
    let val = inputAddCommentRef.current.value.trim();
    if(!val){
      displayToast("warning", "Vui lòng nhập nội dung bình luận");
      return;
    }
    dispatch(commentPost({ content: val, post_id: post._id , reply_id: replyidRef.current}));
    toggleModalAddComment();
    inputAddCommentRef.current.value = "";
  }
  // console.log("POST: ", post);
  return (
    <div className="container">
      <Modal isShow={isShowModalAddComment} size="sm" title="Bình luận bài viết" handleCloseModal={toggleModalAddComment} handleSubmit={addComment}>
        <div className="input__wrapper">
          <label htmlFor="" className="input__label">Nhập nội dung bình luận</label>
          <textarea name="" id="" rows="5" placeholder="Nội dung bình luận...." ref={inputAddCommentRef}></textarea>
        </div>
      </Modal>

      {!isLoaded && <div className="loading">Đang tải nội dung bài viết . . .</div>}
      {isLoaded && 
        <div className="post-detail">
          <div className="post-detail__thumbail">
            <img src={post.thumbnail || "/default.png"} alt="Post thumbnail" />
          </div>
          <h1 className="post-detail__title">{post.title}</h1>
          <div className="post-detail__info">
            <span className="post-detail__info--author">
              <UserItem name={post?.author_name} avatar={post?.author_avatar || "/default.png"} username={post?.authour_username}></UserItem>
            </span>
            <time className="post-detail__info--date">{moment(post?.createdAt).startOf("hour").fromNow()}</time>
          </div>
          <div className="post-detail__info--tags">
            <ul className="tag-list">
              {post?.tags.length > 0 && post?.tags?.map((tag) => (
                <li className="tag-item" key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <p className="post-detail__tldr">
            <span>Tóm tắt: </span>{post?.tldr || "Bài viết không có tóm tắt"}
          </p>
          <div className="post-detail__content" dangerouslySetInnerHTML={{__html: post?.content}}></div>
          <div className="post-detail__reactInfo">
            <span>{post.votes.reduce((total, item)=>{
                  if(item.type == "upvote") return total + 1
                  return total
                }, 0)} UpVote </span>
            <span>{post.votes.reduce((total, item)=>{
                  if(item.type == "downvote") return total + 1
                  return total
                }, 0)} Downvote</span>
            <span>{post.comments.length} Bình luận</span>
          </div>
          <ul className="post-detail__actions">
            <li className={`post-detail__action ${post.votes.filter(i => i.user == auth?.user?._id && i.type=="upvote").length > 0 ? "is-active" : ""}`}>
              <div className="post-detail__action--wrapper" data-tip="Upvote" onClick={()=>vote("upvote")}>
                <span className="post-detail__action--ico">
                  <BiUpvote></BiUpvote>
                </span>
                <span className="post-detail__action--text">Upvote</span>
              </div>
            </li>
            <li className={`post-detail__action ${post.votes.filter(i => i.user == auth?.user?._id && i.type=="downvote").length > 0 ? "is-active" : ""}`}>
              <div className="post-detail__action--wrapper" data-tip="Downvote"  onClick={()=>vote("downvote")}>
                <span className="post-detail__action--ico">
                  <BiDownvote></BiDownvote>
                </span>
                <span className="post-detail__action--text">Downvote</span>
              </div>
            </li>
            <li className="post-detail__action" onClick={toggleModalAddComment}>
              <div
                className="post-detail__action--wrapper"
                data-tip="Bình luận bài viết"
              >
                <span className="post-detail__action--ico">
                  <RiMessage3Line></RiMessage3Line>
                </span>
                <span className="post-detail__action--text">Bình luận</span>
              </div>
            </li>
            <li className="post-detail__action">
              <div
                className="post-detail__action--wrapper"
                data-tip="Chia sẻ lên facebook"
              >
                <span className="post-detail__action--ico">
                  <BiShareAlt></BiShareAlt>
                </span>
                <span className="post-detail__action--text">Chia sẻ</span>
              </div>
            </li>
          </ul>

          <PostCommentBlock post={post}></PostCommentBlock>

          <div className="post-detail__related">
            <h3>Bài viết liên quan</h3>
            <ul className="post-detail__related--list">
              {/* <PostItem></PostItem>
              <PostItem></PostItem>
              <PostItem></PostItem> */}
            </ul>
          </div>
        </div>
      }
    </div>
  );
}
