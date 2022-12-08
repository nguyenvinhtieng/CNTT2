import { VscSettings } from "react-icons/vsc";
import { connect } from "react-redux";
import PostItem from "~/components/PostItem/PostItem";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PostItemSkeleton from "~/components/PostItemSkeleton/PostItemSkeleton";
import { fetchPostData } from "~/redux/actions/postActions";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const searchContentRef = useRef(null);
  const toggleFilter = () => setIsShowFilter(!isShowFilter);
  const handleScroll = () => {
    let h1 = window.innerHeight + document.documentElement.scrollTop;
    let h2 = document.documentElement.offsetHeight;
    if(h1 + 10 >= h2 && !posts.isEnd && !posts.isLoading) {
      let searchContent = searchContentRef.current.value;
      dispatch(fetchPostData({search: searchContent}))
    }
  }
  const startFilter = () => {
    let searchContent = searchContentRef.current.value;
    dispatch(fetchPostData({search: searchContent}))
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
                <input type="text" placeHolder="Nhập nội dung tìm kiếm" ref={searchContentRef} />
            </div>
            <button className="button" onClick={startFilter}>Lọc</button>
        </div>
    </div>
      <ul className="post__list">
        {posts.data.length > 0 && posts.data.map((item) => <PostItem key={item._id} post={item}></PostItem>)}
        {posts.loading && <><PostItemSkeleton /><PostItemSkeleton /><PostItemSkeleton /></>}
      </ul>
        {posts.isEnd && <span className="post__end">Đã hết bài viết</span>}
    </>
  );
}

export default Home;