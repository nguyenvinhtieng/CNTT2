import React, { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux'
import QuestiomItemSkeleton from '~/components/QuestiomItemSkeleton/QuestiomItemSkeleton';
import QuestionItem from '~/components/QuestionItem/QuestionItem'
import { fetchQuestionData } from '~/redux/actions/questionAction';

export default function QuestionPage() {
  const questions = useSelector(state => state.questions)
  const dispatch = useDispatch();
  return (
    <div className="questionPage">
        <h3>Câu hỏi mới nhất</h3>
        <div className="questionPage__filter">

        </div>
        <ul className="">
          {questions?.data?.length > 0 && 
          <InfiniteScroll
            dataLength={questions?.data?.length}
            next={()=> dispatch(fetchQuestionData({}))}
            hasMore={questions?.total > questions?.data?.length || false}
            scrollThreshold={"200px"}
            className="question__list"
            loader={<>
              <QuestiomItemSkeleton /><QuestiomItemSkeleton /><QuestiomItemSkeleton />
            </>}
            endMessage={
              <p className="end-message">
                Yay! You have seen it all
              </p>
            }
          >
            {questions?.data?.map((question) => <QuestionItem key={question._id} question={question}></QuestionItem>)}
          </InfiniteScroll>
          }
            {/* {questions?.data?.length > 0 && questions?.data?.map((question, _) => <QuestionItem key={question._id} question={question}></QuestionItem>)} */}
            {questions?.data?.length == 0 && !questions.loading && <div className="question__list--empty">Không có câu hỏi nào</div>}
            {/* {questions?.data?.length == 0 && questions.loading && new Array(5).fill(null).map((_, index) => <QuestiomItemSkeleton key={index} />)} */}
        </ul>
    </div>
  )
}
