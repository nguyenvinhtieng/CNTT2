import { VscSettings } from "react-icons/vsc";
import { connect } from "react-redux";
import PostItem from "~/components/PostItem/PostItem";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PostItemSkeleton from "~/components/PostItemSkeleton/PostItemSkeleton";
import { fetchPostData, startFilterPost } from "~/redux/actions/postActions";
import { useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";

function Home() {
  const dispatch = useDispatch();

  const [itemOffset, setItemOffset] = useState(0);
  
  const searchContentRef = useRef(null);
  const posts = useSelector((state) => state.posts);

  let itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = posts?.dataTemp?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(posts?.dataTemp?.length / itemsPerPage) || 0;
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % posts?.dataTemp?.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
        {currentItems?.length > 0 &&  currentItems?.map(item => <PostItem key={item._id} post={item}></PostItem>)}
        {posts?.data.length === 0 && <p className="end-message">Không có bài viết nào</p>}
      </div>
      {currentItems?.length > 0 && 
          <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />}
    </>
  );
}

export default Home;