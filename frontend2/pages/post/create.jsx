import React from 'react'
import InputImage from '~/components/InputImage/InputImage'

function CreatePostPage() {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  }
  return (
    <div className="createPage">
      <h1 className='createPage__heading'>Tạo bài viết</h1>
      <form action="" onSubmit={handleSubmitForm}>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tiêu đề</label>
          <input type="text" placeholder='Nhập tiêu đề của bài viết...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tóm tắt bài viết</label>
          <textarea type="text" placeholder='Tóm tắt ngắn gọn bài viết...' rows={5}></textarea>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nội dung bài viết</label>
          <textarea type="text" placeholder='Tóm tắt ngắn gọn bài viết...' rows={5}></textarea>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Thẻ</label>
          <input type="text" placeholder='Chọn thẻ cho bài viết...' />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Ảnh bìa cho bài viết (Nếu k chọn ảnh bìa thì sẽ lấy ảnh mặc định cho bài viết)</label>
          <InputImage></InputImage>
        </div>
        <button>Công khai bài viết</button>
      </form>
    </div>
  )
}

export default CreatePostPage