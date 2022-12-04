import { VscSettings } from "react-icons/vsc";
import { connect } from "react-redux";
import PostItem from "~/components/PostItem/PostItem";
import { useSelector } from "react-redux";
import PostItemSkeleton from "~/components/PostItemSkeleton/PostItemSkeleton";
import { useEffect } from "react";
import { fetchPostData } from "~/redux/actions/postActions";

function Home({fetchPostData}) {
  const posts = useSelector((state) => state.posts);
  const handleScroll = () => {
    let h1 = window.innerHeight + document.documentElement.scrollTop;
    let h2 = document.documentElement.offsetHeight;
    if(h1 + 10 >= h2 && !posts.isEnd && !posts.isLoading) {
      fetchPostData({})
    }
  }
  useEffect(()=> {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <>
      <span className="filter">
        <span className="filter__ttl">Lọc bài viết</span>
        <span className="filter__ico">
          <VscSettings></VscSettings>
        </span>
      </span>
      <ul className="post__list">
        {posts.data.length > 0 && posts.data.map((item) => <PostItem key={item._id} post={item}></PostItem>)}
        {posts.loading && <><PostItemSkeleton /><PostItemSkeleton /><PostItemSkeleton /></>}
      </ul>
        {posts.isEnd && <span className="post__end">Đã hết bài viết</span>}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
      fetchPostData: ({page, filter}) => dispatch(fetchPostData({page, filter})),
  };
};
export default connect(null, mapDispatchToProps)(Home);