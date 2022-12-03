import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import { FaTimes } from 'react-icons/fa';
import Editor from '~/components/Editer/Editer';
import InputImage from '~/components/InputImage/InputImage'
const optionsSavePost = [
  {value: "unpublish", label: "Lưu nháp"},
  {value: "publish", label: "Công khai"}
]
function CreatePostPage() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [saveOption, setSaveOption] = useState(optionsSavePost[0]);
  const handleChangeSaveOption = (selectedOption) => {
    setSaveOption(selectedOption);
  }
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const handleSubmitForm = (e) => {
    e.preventDefault();
  }
  return (
    <div className="createPage">
      <h1 className='createPage__heading'>Tạo bài viết</h1>
      <form action="" onSubmit={handleSubmitForm}>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tiêu đề</label>
          <input type="text" placeHolder='Nhập tiêu đề của bài viết...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tóm tắt bài viết</label>
          <textarea type="text" placeHolder='Tóm tắt ngắn gọn bài viết...' rows={5}></textarea>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nội dung bài viết</label>
          <Editor name="description" onChange={(data) => setData(data)}editorLoaded={editorLoaded} >
            {JSON.stringify(data)}
          </Editor>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Thẻ (Tối đa 4 thẻ)</label>
          <input type="text" placeHolder='Chọn thẻ cho bài viết...' />
        </div>
        <div className="createPage__tagWrapper">
          <ul className="tag-list">
            <li className="tag-item">123 <span className="tag-item__delete"><FaTimes></FaTimes></span></li>
            <li className="tag-item">123 <span className="tag-item__delete"><FaTimes></FaTimes></span></li>
          </ul>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Ảnh bìa cho bài viết (Nếu k chọn ảnh bìa thì sẽ lấy ảnh mặc định cho bài viết)</label>
          <InputImage></InputImage>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Chế độ lưu</label>
          <Select
            value={saveOption}
            onChange={handleChangeSaveOption}
            options={optionsSavePost}
            className="reactSelect"
            isSearchable={false}
            autoFocus={true}
          />
        </div>
        <div className="createPage__btn">
          <button className='button button__lg'>Lưu bài viết</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePostPage