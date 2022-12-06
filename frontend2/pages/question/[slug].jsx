import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import AnswerBlock from '~/components/AnswerBlock/AnswerBlock'
import AnswerItem from '~/components/AnswerItem/AnswerItem'
import Editer from '~/components/Editer/Editer'
import Modal from '~/components/Modal/Modal'
import UserItem from '~/components/UserItem/UserItem'
import { addAnswer } from '~/redux/actions/questionAction'
import displayToast from '~/utils/displayToast'
import { getMethod } from '~/utils/fetchData'

export default function QuestionDetailPage() {
  const router = useRouter()
  const [question, setQuestion] = React.useState(null)
  const [isShowModalAdd, setIsShowModalAdd] = React.useState(false)
  const [answerContent, setAnswerContent] = React.useState('')
  const questions = useSelector(state => state.questions)
  const { slug } = router.query
  const dispatch = useDispatch()
  const toggleModalAdd = () => setIsShowModalAdd(!isShowModalAdd)
  const onChangeAnswerContent = (val) => {
    setAnswerContent(val)
  }
  const saveAnswer = () => {
    let content = answerContent
    if(!content) {
      displayToast("warning", "Nội dung câu trả lời không được để trống")
      return;
    }
    dispatch(addAnswer({content, question_id: question._id}))
    toggleModalAdd();
    setAnswerContent('')
  }
  useEffect(()=> {
    let questionDataFind = questions.data.find(q => q.slug === slug)
    if(questionDataFind) {
      setQuestion(questionDataFind)
    }else {
      if(slug) {
        getMethod(`questions/${slug}`)
          .then(res => {
            const { data } = res;
            if(data.status) {
              setQuestion(data.question)
            }
          })
          .catch(err => console.log(err))
      }
    }

  }, [slug, questions])
  return (
    <div className='questionDetailPage'>
        {isShowModalAdd && <Modal handleCloseModal={toggleModalAdd} title="Thêm câu trả lời" isShow={isShowModalAdd} handleSubmit={saveAnswer}>
          <div className="input__wrapper">
            <label htmlFor="answerContent">Nội dung câu trả lời</label>
            <Editer initialVal='' onChangeFunc={onChangeAnswerContent}></Editer>
          </div>
        </Modal>}
        <UserItem user={question?.author}></UserItem>
        <div className="questionDetailPage__content">
          <h3 className='questionDetailPage__content--ttl'>{question?.title}</h3>
          <ul className="tag-list">
            {question?.tags?.length > 0 && question.tags.map((tag, _) => (<li className="tag-item" key={tag}>{tag}</li>))}
          </ul>
          <div className="questionDetailPage__content--body mce-content-body" 
            dangerouslySetInnerHTML={{__html: question?.content}}
            ></div>
          <div className="questionDetailPage__files">
            <h3>Tập tin đính kèm</h3>
            {question?.files?.length > 0 && question.files.map((file, index) => (
              <div className='questionDetailPage__files--item' key={file.url}>
                <span>{index + 1 } . </span>
                <a key={file.url} href={file.url} target='_blank'>{file.file_name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="questionDetailPage__addAnswer" onClick={toggleModalAdd}>
          <span className="questionDetailPage__addAnswer--ico">
            <FaRegEdit></FaRegEdit>
          </span>
          <span className="questionDetailPage__addAnswer--ttl">Thêm câu trả lời</span>
        </div>
        <div className="questionDetailPage__comments">
          <h3>Các câu trả lời</h3>
          <AnswerBlock answers={question?.answers}></AnswerBlock>
        </div>
    </div>
  )
}
