import React from 'react'
import QuestionItem from '~/components/QuestionItem/QuestionItem'

export default function QuestionPage() {
  return (
    <div className="questionPage">
        <h3>Câu hỏi mới nhất</h3>
        <div className="questionPage__filter">

        </div>
        <ul className="question__list">
            <QuestionItem></QuestionItem>
            <QuestionItem></QuestionItem>
            <QuestionItem></QuestionItem>
        </ul>
    </div>
  )
}
