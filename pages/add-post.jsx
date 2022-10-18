import React, { useState } from 'react';
import dynamic from 'next/dynamic';     
import 'react-quill/dist/quill.snow.css';

import classNames from "classnames/bind"
import styles from "~/styles/pages/AddPost.module.scss"
import DefaultLayout from '~/layouts/DefaultLayout'
const cx = classNames.bind(styles)
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { modules, formats } from "~/utils/reactQuillConfig"
import Input from '~/components/Input';
import { FaTimes } from 'react-icons/fa';
import Button from '~/components/Button';
import InputImage from '~/components/InputImage';
function AddPost() {
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [valueHTML, setValueHTML] = useState('');
  const handleChange = (html) => {
    setValueHTML(html);
  };
  const addTag = () => {
    if(tagInput == "" || tags.length >= 4) return
    setTags([...tags, {id: Math.random(), name: tagInput}]);
    setTagInput("");
  }
  const deleteTag = (id) => {
    setTags(tags.filter(tag => tag.id !== id));
  }
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("heading")}>Tạo bài viết mới</h1>
      <Input label="Tiêu đề bài viết" />
      <label className={cx("label")} htmlFor="">Nội dung bài viết</label>
      <div className={cx("main")}>
        <ReactQuill theme="snow" modules={modules} formats={formats} value={valueHTML} onChange={handleChange} />
      </div>
      <div className={cx("thumbnail")}>
        <InputImage />
      </div>
      <div className={cx("tags")}>
        <label htmlFor="">Chọn thẻ bài viết <span>(Tối đa 4 thẻ)</span></label>
        <div className={cx("input")}>
          <input type="text" value={tagInput} onChange={(e)=> setTagInput(e.target.value)} />
          <button onClick={addTag}>Thêm</button>
        </div>
        <div className={cx("tags__show")}>
          {tags.map((tag) => {
            return (
              <span key={tag.id} className={cx("tags__item")}>
                <span className={cx("tags__item--name")}>{tag.name}</span>
                <span className={cx("tags__item--delete")} onClick={() => deleteTag(tag.id)}>
                  <FaTimes />
                </span>
              </span>)
          })}
        </div>
      </div>
      <Button style={{width: "100%"}} gradient size="md">Đăng bài</Button>
    </div>
  )
}

AddPost.Layout = DefaultLayout

export default AddPost