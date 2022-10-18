import classNames from "classnames/bind"
import { FaRegComment } from "react-icons/fa";
import styles from "./CommentLayout.module.scss"
const cx = classNames.bind(styles)
function CommentLayout() {
  return (
    <>
    <div className={cx("comment_btn")}>
      <span>12</span> <FaRegComment />
    </div>
    {/* <div> */}
      {/* a */}
      {/* <Input label="Add your comment" placeholder='. . .'/>
      <Button size="md" gradient style={{marginTop: "10px", width: "100%"}}>Add comment</Button> */}
    {/* </div> */}
    </>
  )
}
export default CommentLayout