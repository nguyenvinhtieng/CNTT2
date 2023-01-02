import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import QuestiomItemSkeleton from '~/components/QuestiomItemSkeleton/QuestiomItemSkeleton';
import QuestionItem from '~/components/QuestionItem/QuestionItem'

export default function QuestionPage() {
  const [questionData, setQuestionData] = React.useState([]);
  const questions = useSelector(state => state.questions)
  console.log("state: ", useSelector(state => state))
  useEffect(()=>{
    setQuestionData(questions.data)
  }, [questions])

  return (
    <div className="questionPage">
        <h3>Câu hỏi mới nhất</h3>
        <div className="questionPage__filter">

        </div>
        <ul className="question__list">
            {questionData.length > 0 && questionData.map((question, _) => <QuestionItem key={question._id} question={question}></QuestionItem>)}
            {questionData.length == 0 && !questions.loading && <div className="question__list--empty">Không có câu hỏi nào</div>}
            {questionData.length == 0 && questions.loading && new Array(5).fill(null).map((_, index) => <QuestiomItemSkeleton key={index} />)}
        </ul>
    </div>
  )
}
