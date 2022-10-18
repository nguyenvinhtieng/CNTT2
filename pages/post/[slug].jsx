import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { BsBookmarkFill } from "react-icons/bs";
import NewsRelatedContainer from "~/components/News/NewsRalatedContainer";
import DefaultLayout from "~/layouts/DefaultLayout";
import styles from "~/styles/pages/Post.module.scss";
import NewsDetail from "~/components/News/NewsDetail";
import CommentLayout from "~/components/Comment/CommentLayout";

const cx = classNames.bind(styles);

function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <section className={cx("wrapper")}>
      <div className={cx("post")}>
        <div className={cx("post-detail")}>
          <div className={cx("bookmark", "active")}>
            <BsBookmarkFill />
          </div>
          <NewsDetail />
        </div>
        <div className={cx("comment")}>
          <CommentLayout />
        </div>
        <div className={cx("related-post")}>
          <NewsRelatedContainer />
        </div>
      </div>
    </section>
  );
}
PostDetail.Layout = DefaultLayout;

export default PostDetail;
