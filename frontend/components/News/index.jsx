import classNames from "classnames/bind"
import Skeleton from "../Skeleton"
import styles from "./News.module.scss"
import NewsInfinityScroll from "./NewsInfinityScroll"
const cx = classNames.bind(styles)

function News() {
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("heading")}>Bài viết mới nhất</h2>
      <NewsInfinityScroll />
    </div>
  )
}

export default News
