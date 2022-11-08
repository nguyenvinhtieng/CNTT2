import classNames from "classnames/bind";
import { useRouter } from "next/router";
import AnswerLayout from "~/components/Answer/AnswerLayout";
import QuestionDetail from "~/components/Question/QuesionDetail";
import DefaultLayout from "~/layouts/DefaultLayout";
import styles from "~/styles/pages/Q&A.module.scss";

const cx = classNames.bind(styles);

function QAADetail() {
  const router = useRouter();
  return (
    <section className={cx("wrapper")}>
      <div className={cx("question__detail")}>
        <QuestionDetail />
      </div>
      <AnswerLayout></AnswerLayout>
    </section>
  );
}
QAADetail.Layout = DefaultLayout;

export default QAADetail;
