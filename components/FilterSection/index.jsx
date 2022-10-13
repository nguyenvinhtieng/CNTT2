import classNames from "classnames/bind"
import { FaSearch } from "react-icons/fa"

import styles from "./FilterSection.module.scss"

const cx = classNames.bind(styles)

function FilterSection() {
  return (
    <div className={cx("wrapper")}>
      <h3>Lọc bài viết</h3>
      <div className={cx("search")}>
        <input type="text" placeholder="Tìm kiếm bài viết" />
        <span><FaSearch /></span>
      </div>
    </div>
  )
}

export default FilterSection