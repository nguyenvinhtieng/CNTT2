import classNames from "classnames/bind"
import dynamic from 'next/dynamic';     
import 'react-quill/dist/quill.snow.css';
import Button from "~/components/Button";
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import { modules, formats } from "~/utils/reactQuillConfig"

import styles from "../answer.module.scss"
import AnswerItem from "../AnswerItem"
const cx = classNames.bind(styles)

function AnswerLayout() {
  return (
    <div className={cx("answer__layout")}>
      <div className={cx("my_answer")}>
        <h3>Thêm câu trả lời của bạn</h3>
        <ReactQuill theme="snow" modules={modules} formats={formats} value={"valueHTML"} onChange={()=>{}} />
        <Button primary rounded size="md">Đăng</Button>
      </div>

      <h3 className={cx("heading")}>Các câu trả lời</h3>

      <div className={cx("answer__list")}>
        <AnswerItem></AnswerItem>
        <AnswerItem></AnswerItem>
        <AnswerItem></AnswerItem>
      </div>
        
    </div>
  )
}
export default AnswerLayout