import Link from "next/link";
import classNames from "classnames/bind";
import styles from "../News.module.scss";
import Button from "~/components/Button";
import { AiFillEye } from "react-icons/ai";
import Skeleton from "~/components/Skeleton";

const cx = classNames.bind(styles);

function NewsItemRelatedSkeleton() {
  return (
    <li className={cx("news-related")}>
      <div className={cx("news-related__img")}>
        <Skeleton width={"100%"} height={150} radius={4} />
      </div>
      <div className={cx("news-related__content")}>
        <div className={cx("news-related__title")}>
          <Skeleton width={"100%"} height={20} radius={4} marginBottom={5} />
          <Skeleton width={"100%"} height={20} radius={4} />
        </div>
        <div className={cx("news-related__info")}>
          <div className={cx("news-related__minutes")}>
            <Skeleton width={100} height={15} radius={4} />
          </div>
          <span className={cx("news-related__btn")}>
            <Skeleton width="100%" height={40} radius={4} />
          </span>
        </div>
      </div>
    </li>
  );
}

export default NewsItemRelatedSkeleton;
