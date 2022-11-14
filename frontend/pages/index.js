import { useState, forwardRef } from "react" 
import classNames from "classnames/bind"

import styles from "~/styles/pages/Home.module.scss"
import DefaultLayout from '~/layouts/DefaultLayout'
import { HiFilter } from "react-icons/hi"
import FilterSection from "~/components/FilterSection"
import News from "~/components/News"
import Overlay from "~/components/Overlay"
import { Tooltip } from "react-tippy"

const cx = classNames.bind(styles)

function Home() {
  const [showFilter, setShowFilter] = useState(false)
  const toggleFiler = () => setShowFilter(!showFilter)
  return (
    <>
      <div className={cx("main")}>
        <Overlay isShow={showFilter} onClick={toggleFiler} isShowPc={false}/>
        <div className={cx("filter", showFilter ? "is-open": "")}>
          <FilterSection />
        </div>
        <div className={cx("content")}>
          <div className={cx("filter__btn")} onClick={toggleFiler}>
            <HiFilter />
          </div>
          <News />
        </div>
      </div>
    </>
  )
}

Home.Layout = DefaultLayout

export default Home