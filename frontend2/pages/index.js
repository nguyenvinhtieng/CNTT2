import { VscSettings } from "react-icons/vsc";
import { connect } from "react-redux";
import PostItem from "~/components/PostItem/PostItem";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PostItemSkeleton from "~/components/PostItemSkeleton/PostItemSkeleton";
import { fetchPostData, startFilterPost } from "~/redux/actions/postActions";
import { useDispatch } from "react-redux";
import { postMethod } from "~/utils/fetchData";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const dispatch = useDispatch();

  const searchContentRef = useRef(null);
  const posts = useSelector((state) => state.posts);
  
  const startFilter = () => {
    let content = searchContentRef.current.value;
    dispatch(startFilterPost({content}));
  }
  
  return (
    <>
      <div className={`search`}>
        <div className="search__inner">
            <div className="input__wrapper">
              <label htmlFor="" className="input__label">Tìm kiếm bài viết</label>
              <input type="text" placeholder="Nhập nội dung tìm kiếm" ref={searchContentRef} />
            </div>
            <button className="button" onClick={startFilter}>Tìm</button>
        </div>
    </div>
      <div className="post__list">
      {posts?.data?.length > 0 && 
        <InfiniteScroll
          dataLength={posts?.data.length}
          next={()=> dispatch(fetchPostData({}))}
          hasMore={posts?.total > posts?.data?.length || false}
          scrollThreshold={"200px"}
          className="post__list--infinity"
          loader={<>
            <PostItemSkeleton /><PostItemSkeleton /><PostItemSkeleton />
          </>}
          endMessage={
            <p className="end-message">
              Yay! You have seen it all
            </p>
          }
        >
          {posts?.data?.map((item) => <PostItem key={item._id} post={item}></PostItem>)}
        </InfiniteScroll>
        }
        {posts?.data.length === 0 && <p className="end-message">Không có bài viết nào</p>}
        {/* {isLoading && <><PostItemSkeleton /><PostItemSkeleton /><PostItemSkeleton /></>} */}
      </div>
    </>
  );
}

export default Home;