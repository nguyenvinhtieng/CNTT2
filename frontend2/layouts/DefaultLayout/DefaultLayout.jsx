import React from 'react'
import Overlay from '~/components/Overlay/Overlay'
import Header from '~/layouts/components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import { VscSettings } from 'react-icons/vsc'
export default function DefaultLayout() {
  const [isShowSidebar, setIsShowSidebar] = React.useState(false)
  const toggleSidebar = () => setIsShowSidebar(!isShowSidebar)

  return (
    <>
      <Header toggleSidebar={toggleSidebar} />
      <main className='defaultLayout'>
        <Sidebar isOpen={isShowSidebar}></Sidebar>
        <Overlay isShow={isShowSidebar} handleClick={toggleSidebar}></Overlay>
        <div className="defaultLayout__wrapper">
          <div className="container large">
            <span className="filter">
              <span className='filter__ttl'>Lọc bài viết</span>
              <span className="filter__ico"><VscSettings></VscSettings></span>
            </span>
            <ul className="post__list">
              a
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
