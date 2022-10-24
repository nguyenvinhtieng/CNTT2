import classNames from "classnames/bind"
import styles from "../News.module.scss"
import Skeleton from "~/components/Skeleton"

const cx = classNames.bind(styles)

function NewsItemSkeleton() {
  

  return (
    <div className={cx("news__item")}>
      <div className={cx("news__item--image")}>
        <Skeleton width={"100%"} height={"100%"} radius={8} />
      </div>
      <div className={cx("news__item--content")}>
        <h3 className={cx("news__item--title")}>
          <Skeleton width={"100%"} height={18} radius={4} marginBottom={6}/>
          <Skeleton width={"100%"} height={18} radius={4} />
        </h3>
        <div className={cx("news__item--tags")}>
          <Skeleton width={50} height={26} radius={4}/>
          <Skeleton width={50} height={26} radius={4}/>
          <Skeleton width={50} height={26} radius={4}/>
          <Skeleton width={50} height={26} radius={4}/>
        </div>
        <div className={cx("news__item--minutes")}>
          <Skeleton width={120} height={13} radius={8} />
        </div>
        <span className={cx("news__item--btn")}>
            <Skeleton width={120} height={40} radius={4} />
        </span>
      </div>
    </div>
  )
}

export default NewsItemSkeleton
