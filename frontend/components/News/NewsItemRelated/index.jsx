import Link from "next/link";
import classNames from "classnames/bind";
import styles from "../News.module.scss";
import Button from "~/components/Button";
import { AiFillEye } from "react-icons/ai";

const cx = classNames.bind(styles);

function NewsItemRelated() {
  return (
    <li className={cx("news-related")}>
      <div className={cx("news-related__img")}>
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className={cx("news-related__content")}>
        <h2 className={cx("news-related__title")}>
          Lorem, ipsum dolor. Lorem, ipsum dolor. Lorem, ipsum dolor.
        </h2>
        <div className={cx("news-related__info")}>
          <p className={cx("news-related__minutes")}>
            <AiFillEye /> 20 phút đọc
          </p>
          <span className={cx("news-related__btn")}>
            <Link href="/">
              <Button size="sm" gradient>
                Xem bài viết...
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </li>
  );
}

export default NewsItemRelated;
