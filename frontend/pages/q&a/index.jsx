import DefaultLayout from '../../layouts/DefaultLayout'
import React from 'react'
import classNames from "classnames/bind"

import styles from "~/styles/pages/Q&A.module.scss"
import QuestionLayout from '~/components/Question/QuestionLayout'

const cx = classNames.bind(styles)

function QAA() {
  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("heading")}>Câu hỏi mới nhất</h1>
      <QuestionLayout />
    </div>
  )
}
QAA.Layout = DefaultLayout
export default QAA