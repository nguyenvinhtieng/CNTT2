import React, { useEffect, useState, useId, useRef  } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select';
import { FaTimes } from 'react-icons/fa';
import Editor from '~/components/Editer/Editer';
import InputImage from '~/components/InputImage/InputImage'
import displayToast from '~/utils/displayToast';
import { createPost } from '~/redux/actions/postActions';
import { postMethod } from '~/utils/fetchData';
import { useRouter } from 'next/router';
function CreateQuestionPage() {
  const tagRef = useRef();
  const router = useRouter();
  const [questionData, setQuestionData] = useState({
    title: "",
    content: "",
    tags: [],
    files: []
  });

  const handlePressTag = (e) => {
    if (e.key === "Enter") {
      let value = e.target.value;
      if(!value) return
      if(questionData.tags.includes(value)) {
        displayToast("warning", "Bạn đã sử dụng thẻ này rồi");
        return;
      }
      if(value.length > 20) {
        displayToast("warning", "Thẻ không được quá 20 ký tự");
        return;
      }
      if(questionData.tags.length >= 5) {
        displayToast("warning", "Bạn chỉ được sử dụng tối đa 5 thẻ");
        return;
      }
      setQuestionData({ ...questionData, tags: [...questionData.tags, value] })
      tagRef.current.value = "";
    }
  }
  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value });
  }
  const handleDeleteTag = (index) => {
    let tags = questionData.tags;
    tags.splice(index, 1);
    setQuestionData({ ...questionData, tags: tags })
  }
  const handleChangeContent = (content) => {
    setQuestionData({ ...questionData, content: content })
  }
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log("data: ", questionData);
    // const formData = new FormData();
    // formData.append("title", postData.title);
    // formData.append("tldr", postData.tldr);
    // formData.append("content", postData.content);
    // formData.append("saveOption", postData?.saveOption?.value);
    // let blodImage = postData.thumbnail[0]?.file;
    // if(blodImage) {
    //   formData.append("thumbnail", blodImage, postData.thumbnail[0]);
    // }
    // postData.tags.forEach(item => formData.append("tags", item));
    // createPost(formData);
    // router.push("/posts")
  }
  return (
    <div className="createPage">
      <h1 className='createPage__heading'>Tạo câu hỏi</h1>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Tiêu đề</label>
          <input type="text" name="title" placeholder='Nhập tiêu đề của câu hỏi...' value={questionData.title}  onChange={handleChangeForm} />
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="">Nội dung Câu hỏi</label>
          <Editor onChangeFunc={handleChangeContent}/>
        </div>
        <div className="input__wrapper">
          <label className='input__label' htmlFor="" >Thẻ (Tối đa 4 thẻ)</label>
          <input type="text" placeholder='Chọn thẻ cho câu hỏi...' onKeyPress={handlePressTag} ref={tagRef}/>
        </div>
        <div className="createPage__tagWrapper">
          <ul className="tag-list">
            {questionData.tags.length > 0 && questionData.tags.map((tag, index) => (
              <li key={tag} className="tag-item">{tag} <span className="tag-item__delete" onClick={()=>handleDeleteTag(index)}><FaTimes></FaTimes></span></li>
            ))}
          </ul>
        </div>
        <div className="createPage__btn">
          <button className='button button__lg' type='button' onClick={handleSubmitForm}>Đăng câu hỏi</button>
        </div>
      </form>
    </div>
  )
}

export default CreateQuestionPage