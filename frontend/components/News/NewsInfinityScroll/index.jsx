import classNames from "classnames/bind"
import styles from "../News.module.scss"
import NewsItem from "../NewsItem"
import NewsItemSkeleton from "../NewsItem/skeleton"

const cx = classNames.bind(styles)

function NewsInfinityScroll() {
  return (
    <div className={cx("news__list")}>
      <NewsItemSkeleton />
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  )
}

export default NewsInfinityScroll
