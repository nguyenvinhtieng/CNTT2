import { VscSettings } from "react-icons/vsc";
import PostItem from "~/components/PostItem/PostItem";

export default function Home() {
  return (
    <>
      <span className="filter">
        <span className="filter__ttl">Lọc bài viết</span>
        <span className="filter__ico">
          <VscSettings></VscSettings>
        </span>
      </span>
      <ul className="post__list">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ul>
    </>
  );
}
