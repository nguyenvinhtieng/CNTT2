import { VscSettings } from "react-icons/vsc";
import { connect } from "react-redux";
import PostItem from "~/components/PostItem/PostItem";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PostItemSkeleton from "~/components/PostItemSkeleton/PostItemSkeleton";
import { fetchPostData } from "~/redux/actions/postActions";
import { useDispatch } from "react-redux";
import { postMethod } from "~/utils/fetchData";

function Home() {
  const dispatch = useDispatch();
  const [postsShow, setPostsShow] = useState([]);
  const [postsFilter, setPostsFilter] = useState([]);

  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const searchContentRef = useRef(null);
  const toggleFilter = () => setIsShowFilter(!isShowFilter);

  const posts = useSelector((state) => state.posts);

  useEffect(()=>{
    console.log("post here")
    console.log(posts.data)
    setPostsFilter(posts.data);
    setPostsShow(posts.data.slice(0, 10));
  }, [posts])

  const handleScroll = () => {
    let h1 = window.innerHeight + document.documentElement.scrollTop;
    let h2 = document.documentElement.offsetHeight;
    if(h1 + 10 >= h2 && !posts.isEnd && !posts.isLoading) {
      console.log("postsFilter: ", postsFilter)
      console.log("postsShow: ", postsShow)
      console.log("scroll end")
      if(postsFilter.length > 0 && postsFilter.length > postsShow.length) {
        setPostsShow([...postsShow, ...postsFilter.slice(postsShow.length, postsShow.length + 10)])
      }
    }
  }
  const startFilter = () => {
    setPosts([]);
    fetchPost({page: 1})
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <>
      <span className="filter" onClick={toggleFilter}>
        <span className="filter__ttl">Lọc bài viết</span>
        <span className="filter__ico">
          <VscSettings></VscSettings>
        </span>
      </span>
      <div className={`managePage__filter ${isShowFilter ? "is-show" : ""}`}>
        <div className="managePage__filter__search">
            <div className="input__wrapper">
                <label htmlFor="" className="input__label">Tìm kiếm bài viết</label>
                <input type="text" placeholder="Nhập nội dung tìm kiếm" ref={searchContentRef} />
            </div>
            <button className="button" onClick={startFilter}>Lọc</button>
        </div>
    </div>
      <ul className="post__list">
        {postsShow.length > 0 && postsShow.map((item) => <PostItem key={item._id} post={item}></PostItem>)}
        {isLoading && <><PostItemSkeleton /><PostItemSkeleton /><PostItemSkeleton /></>}
      </ul>
        {isEnd && <span className="post__end">Đã hết bài viết</span>}
    </>
  );
}

export default Home;