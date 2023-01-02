import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import QuestiomItemSkeleton from '~/components/QuestiomItemSkeleton/QuestiomItemSkeleton';
import QuestionItem from '~/components/QuestionItem/QuestionItem'

export default function QuestionPage() {
  const questions = useSelector(state => state.questions)
  return (
    <div className="questionPage">
        <h3>Câu hỏi mới nhất</h3>
        <div className="questionPage__filter">

        </div>
        <ul className="question__list">
            {questions?.data?.length > 0 && questions?.data?.map((question, _) => <QuestionItem key={question._id} question={question}></QuestionItem>)}
            {questions?.data?.length == 0 && !questions.loading && <div className="question__list--empty">Không có câu hỏi nào</div>}
            {questions?.data?.length == 0 && questions.loading && new Array(5).fill(null).map((_, index) => <QuestiomItemSkeleton key={index} />)}
        </ul>
    </div>
  )
}
