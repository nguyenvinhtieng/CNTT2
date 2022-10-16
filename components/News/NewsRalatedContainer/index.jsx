import classNames from "classnames/bind";
import NewsItemRelated from "../NewsItemRelated";
import NewsItemRelatedSkeleton from "../NewsItemRelated/skeleton";
import styles from "../News.module.scss";

const cx = classNames.bind(styles);

function NewsRelatedContainer() {
  return (
    <>
      <h3 className={cx("news-related-container__head")}>Related post</h3>
      <ul className={cx("news-related-container__list")}>
        <NewsItemRelated />
        <NewsItemRelated />
        <NewsItemRelated />
        <NewsItemRelatedSkeleton />
      </ul>
    </>
  );
}

export default NewsRelatedContainer;
