
import React from 'react'
import AdminLayout from "~/layouts/AdminLayout"
import { MdModeEditOutline } from "react-icons/md"
import { FaTrash } from 'react-icons/fa'
import classNames from 'classnames/bind'
import styles from '~/styles/pages/Manage.module.scss'
import { AiFillEye } from 'react-icons/ai'
import { Tooltip } from "react-tippy";

const cx = classNames.bind(styles)
function ManagePost() {
  return (
    <div className={cx("manage__layout")}>
      <h2 className={cx("manage__heading")}>Quản lý bài viết người dùng</h2>
      <div className={cx("manage__table")}>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Người đăng</th>
              <th>Ngày đăng</th>
              <th>Trạng thái</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Đây là tiêu đề bài viết</td>
              <td>Nguyễn Văn A</td>
              <td>12/12/2020</td>
              <td>Đã duyệt</td>
              <td>
                <button className={cx("manage__table__btn", "manage__table__btn--view")}>
                  <Tooltip html={ <p className="tooltip-manage">Xem bài viết</p> }>
                    <span><AiFillEye /></span>
                  </Tooltip>
                </button>
                <button className={cx("manage__table__btn", "manage__table__btn--delete")}>
                  <Tooltip html={ <p className="tooltip-manage">Xóa bài viết</p> }>
                    <span><FaTrash /></span>
                  </Tooltip>
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Đây là tiêu đề bài viết</td>
              <td>Nguyễn Văn A</td>
              <td>12/12/2020</td>
              <td>Đã duyệt</td>
              <td>
                <button className={cx("manage__table__btn", "manage__table__btn--view")}>
                  <Tooltip html={ <p className="tooltip-manage">Xem bài viết</p> }>
                    <span><AiFillEye /></span>
                  </Tooltip>
                </button>
                <button className={cx("manage__table__btn", "manage__table__btn--delete")}>
                  <Tooltip html={ <p className="tooltip-manage">Xóa bài viết</p> }>
                    <span><FaTrash /></span>
                  </Tooltip>
                </button>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}
ManagePost.Layout = AdminLayout
export default ManagePost