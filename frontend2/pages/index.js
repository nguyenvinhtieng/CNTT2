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
  // const posts = useSelector((state) => state.posts);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const searchContentRef = useRef(null);
  const toggleFilter = () => setIsShowFilter(!isShowFilter);
  // const [posts, setPosts] = useState([])

  const posts = useRef([]);

  const fetchPost = async ({page}) => {
    setIsLoading(true);
    let pageNow = page || currentPage + 1;
    setCurrentPage(pageNow);
    let filterCondition = {page: pageNow, content: searchContentRef.current.value}
    const res = await postMethod("post/get-posts", filterCondition);
    const { data } = res;
    console.log("res: ", res)
    console.log("fetch page: ", pageNow)
    if(data.status) {
      posts.current = [...posts.current, ...data.posts];
      // delete duplicate item
      posts.current = posts.current.filter((item, index) => {
        return posts.current.findIndex((item2) => item2._id === item._id) === index;
      })

      if(data.posts.length < 10) {
        setIsEnd(true);
      }
    }else {
      setIsEnd(true);
    }
    setIsLoading(false);
  }

  useEffect(()=> {
    console.log("rerender")
  }, [posts.current])

  const handleScroll = () => {
    let h1 = window.innerHeight + document.documentElement.scrollTop;
    let h2 = document.documentElement.offsetHeight;
    if(h1 + 10 >= h2 && !posts.isEnd && !posts.isLoading) {
      console.log("scroll end")
      fetchPost({})
    }
  }
  const startFilter = () => {
    setPosts([]);
    fetchPost({page: 1})
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    fetchPost({page: 1});
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
        {posts.current.length > 0 && posts.current.map((item) => <PostItem key={item._id} post={item}></PostItem>)}
        {isLoading && <><PostItemSkeleton /><PostItemSkeleton /><PostItemSkeleton /></>}
      </ul>
        {isEnd && <span className="post__end">Đã hết bài viết</span>}
    </>
  );
}

export default Home;