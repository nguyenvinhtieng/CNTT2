import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import UserItem from '~/components/UserItem/UserItem'
import { getMethod } from '~/utils/fetchData'

export default function QuestionDetailPage() {
  const router = useRouter()
  const [question, setQuestion] = React.useState(null)
  const questions = useSelector(state => state.questions)
  const { slug } = router.query
  useEffect(()=> {
    let questionDataFind = questions.data.find(q => q.slug === slug)
    if(questionDataFind) {
      console.log(questionDataFind)
      setQuestion(questionDataFind)
    }else {
      console.log("run there")
      if(slug) {
        getMethod(`questions/${slug}`)
          .then(res => {
            console.log(res)
          })
          .catch(err => console.log(err))
      }
    }

  }, [slug])
  console.log("question: ", question)
  return (
    <div className='questionDetailPage'>
      
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
            <a href="/" target='_blank'>
              Lien ket
            </a>
          </div>
        </div>
    
    </div>
  )
}
