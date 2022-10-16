import classNames from "classnames/bind";
import { useRouter } from "next/router";
import NewsRelatedContainer from "~/components/News/NewsRalatedContainer";
import NewsItemRelated from "~/components/News/NewsItemRelated";
import NewsItemRelatedSkeleton from "~/components/News/NewsItemRelated/skeleton";
import DefaultLayout from "~/layouts/DefaultLayout";
import styles from "~/styles/pages/Post.module.scss";
import NewsDetail from "~/components/News/NewsDetail";

const cx = classNames.bind(styles);

function PostDetail() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <section className={cx("wrapper")}>
      <div className={cx("comment__layout")}>Comment layout</div>
      <div className={cx("post")}>
        <div className={cx("post-detail")}>
          <NewsDetail />
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
