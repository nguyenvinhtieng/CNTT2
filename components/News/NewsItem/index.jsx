import Link from "next/link";
import classNames from "classnames/bind";
import { AiFillEye } from "react-icons/ai";
import styles from "../News.module.scss";
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function NewsItem() {
  return (
    <div className={cx("news__item")}>
      <div className={cx("news__item--image")}>
        <img src="https://picsum.photos/200/300" alt="news" />
      </div>
      <div className={cx("news__item--content")}>
        <h3 className={cx("news__item--title")}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          excepturi maiores obcaecati quidem nesciunt doloremque alias, magni
          culpa ratione nulla beatae nemo laudantium recusandae. Perspiciatis
          iste quod minima ipsam aspernatur.
        </h3>
        <p className={cx("news__item--tags")}>
          <span className={cx("news__item--tag")}>#tag</span>
          <span className={cx("news__item--tag")}>#tag</span>
          <span className={cx("news__item--tag")}>#tag</span>
          <span className={cx("news__item--tag")}>#tag</span>
        </p>
        <p className={cx("news__item--minutes")}>
          <AiFillEye /> 20 phút đọc
        </p>
        <span className={cx("news__item--btn")}>
          <Link href="/">
            <Button size="sm" gradient>
              Xem bài viết...
            </Button>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default NewsItem;
