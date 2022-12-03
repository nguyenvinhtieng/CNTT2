import React from "react";
import { AiOutlineDoubleRight, AiOutlineEye, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";

export default function ManageUserPage() {
    const [ isShowFilter, setIsShowFilter ] = React.useState(false);
    const toggleFilter = () => setIsShowFilter(!isShowFilter);
    
return (
    <div className="managePage">
    <h2 className="managePage__heading" >Danh sách người dùng</h2>
    <span className="filter" onClick={toggleFilter}>
        <span className="filter__ttl">Lọc dữ liệu</span>
        <span className="filter__ico">
            <VscSettings></VscSettings>
        </span>
    </span>
    {isShowFilter && <div className="managePage__filter">
        <div className="managePage__filter__search">
            <div className="input__wrapper">
                <label htmlFor="" className="input__label">Teen</label>
                <input type="text" placeHolder="Ten" />
            </div>
            <button className="button">Lọc</button>
        </div>
    </div>}
    <div className="managePage__num">Trang 1/10</div>
    <div className="managePage__content">
        <div className="table__wrapper">
            <table className="table">
            <thead>
                <tr>
                <th>STT</th>
                <th>Tên người dùng</th>
                <th>Ảnh đại diện</th>
                <th>Email</th>
                <th>Ngày tạo</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td><div className="avatar avatar__sm">
                        <img src="https://source.unsplash.com/random" alt="" /></div></td>
                    <td>
                        <a href="mailto:abc@gmail.com">abc</a>
                    </td>
                    <td>12/12/2020</td>
                    <td>Hoạt động</td>
                    <td>
                        <div className="table__actions">
                            <div className="table__actionsItem view" data-tip="Xem thông tin người dùng">
                                <span className="table__action--ico"><AiOutlineEye></AiOutlineEye></span>
                            </div>
                            <div className="table__actionsItem delete" data-tip="Khóa tài khoản người dùng">
                                <span className="table__action--ico"><BiBlock></BiBlock></span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td><div className="avatar avatar__sm">
                        <img src="https://source.unsplash.com/random" alt="" /></div></td>
                    <td>
                        <a href="mailto:abc@gmail.com">abc</a>
                    </td>
                    <td>12/12/2020</td>
                    <td>Hoạt động</td>
                    <td>
                        <div className="table__actions">
                            <div className="table__actionsItem view" data-tip="Xem thông tin người dùng">
                                <span className="table__action--ico"><AiOutlineEye></AiOutlineEye></span>
                            </div>
                            <div className="table__actionsItem delete" data-tip="Khóa tài khoản người dùng">
                                <span className="table__action--ico"><BiBlock></BiBlock></span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td><div className="avatar avatar__sm">
                        <img src="https://source.unsplash.com/random" alt="" /></div></td>
                    <td>
                        <a href="mailto:abc@gmail.com">abc</a>
                    </td>
                    <td>12/12/2020</td>
                    <td>Hoạt động</td>
                    <td>
                        <div className="table__actions">
                            <div className="table__actionsItem view" data-tip="Xem thông tin người dùng">
                                <span className="table__action--ico"><AiOutlineEye></AiOutlineEye></span>
                            </div>
                            <div className="table__actionsItem delete" data-tip="Khóa tài khoản người dùng">
                                <span className="table__action--ico"><BiBlock></BiBlock></span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Nguyễn Văn A</td>
                    <td><div className="avatar avatar__sm">
                        <img src="https://source.unsplash.com/random" alt="" /></div></td>
                    <td>
                        <a href="mailto:abc@gmail.com">abc</a>
                    </td>
                    <td>12/12/2020</td>
                    <td>Hoạt động</td>
                    <td>
                        <div className="table__actions">
                            <div className="table__actionsItem view" data-tip="Xem thông tin người dùng">
                                <span className="table__action--ico"><AiOutlineEye></AiOutlineEye></span>
                            </div>
                            <div className="table__actionsItem delete" data-tip="Khóa tài khoản người dùng">
                                <span className="table__action--ico"><BiBlock></BiBlock></span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
        <div className="managePage__pagination">
            <span className="prevPage" data-tip="Trang trước">
                <AiOutlineLeft></AiOutlineLeft>
            </span>
            <span className="nextPage" data-tip="Trang kế">
                <AiOutlineRight></AiOutlineRight>
            </span>

        </div>
      </div>
    </div>
  );
}
