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
      if(slug) {
        getMethod(`questions/${slug}`).then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
      }
    }

  }, [slug])
  return (
    <div className='questionDetailPage'>
      <UserItem user={question.author}></UserItem>
      <div className="questionDetailPage__content">
        <h3 className='questionDetailPage__content--ttl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga.</h3>
        <ul className="tag-list">
          <li className="tag-item">HTML</li>
        </ul>
        <div className="questionDetailPage__content--body mce-content-body" 
          // dangerouslySetInnerHTML={{__html: post?.content}}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, debitis.
        </div>
        <div className="questionDetailPage__files">
          <a href="/" target='_blank'>
            Lien ket
          </a>
        </div>
      </div>
    </div>
  )
}
