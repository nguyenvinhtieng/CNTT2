import classNames from "classnames/bind"

import styles from "~/styles/pages/Home.module.scss"
import DefaultLayout from '~/layouts/DefaultLayout'

import FilterSection from "~/components/FilterSection"
import News from "~/components/News"

const cx = classNames.bind(styles)

function Home() {
  return (
    <>
      <div className={cx("main")}>
        <div className={cx("filter")}>
          <FilterSection />
        </div>
        <div className={cx("content")}>
          <News />
        </div>
      </div>
    </>
  )
}

Home.Layout = DefaultLayout

export default Home