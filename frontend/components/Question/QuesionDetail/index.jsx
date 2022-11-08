import classNames from "classnames/bind";
import styles from "../question.module.scss";

const cx = classNames.bind(styles);

function QuestionDetail() {
  return (
    <>
      <time className={cx("time")}>Time: 10010101010</time>
      <h1 className={cx("title")}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, eum.</h1>
      <ul className={cx("question__item--tags")}>
        <li className={cx("question__item--tag")}>HTML</li>
        <li className={cx("question__item--tag")}>CSS</li>
      </ul>
      <div className={cx("question__detail--content")}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quidem, commodi ea repellendus dolor voluptas aspernatur provident impedit aperiam temporibus ipsam nam molestias illum adipisci veritatis itaque inventore distinctio, quam aliquid enim quaerat ratione? Consequatur ab commodi nihil dolorem ipsam consectetur dolor dignissimos, nisi assumenda cupiditate blanditiis repellendus quidem quas distinctio voluptates pariatur quod qui. Alias nihil dolorem vero quo voluptatum repellat ratione possimus sit tempore eum iste dolorum, expedita aperiam! Iusto nemo sint laborum exercitationem, consequatur error ea incidunt autem distinctio reprehenderit earum odit temporibus aperiam amet eaque ex dolorem dolores labore quos doloremque tenetur molestiae reiciendis facere. Ex voluptate ullam earum ducimus assumenda dolorum odit nesciunt nulla aspernatur labore saepe cupiditate eaque soluta iure laboriosam accusantium, cum quis atque temporibus autem voluptatum dicta. Explicabo voluptatibus tempore eaque blanditiis porro voluptates consectetur inventore exercitationem animi repellendus maiores, veniam autem, culpa, repudiandae commodi. Sunt esse id perspiciatis, magni iure quo libero, animi molestias repellat nobis aut necessitatibus veritatis earum, illo officia ipsam fugiat dolorum iusto fuga quam rem. Ipsam labore aliquid molestiae ex placeat nostrum perferendis deleniti similique amet recusandae eligendi possimus nesciunt itaque consequatur earum, dolorem in quibusdam numquam dicta pariatur iure dolor voluptatum repellendus. Corrupti quas omnis itaque ullam voluptatem, dolorem repudiandae culpa neque tenetur, doloribus minus delectus, asperiores hic ducimus quos eos nihil temporibus consequatur! Voluptatum temporibus in tempora velit consectetur unde quae harum. Perferendis dolore soluta, tenetur saepe fugiat eveniet, minima nisi voluptates enim, officia deleniti. Aspernatur doloremque sequi id enim nulla tempore corrupti, blanditiis animi eius quos repudiandae asperiores quam eos consectetur amet harum? Quam, soluta. Praesentium ab deserunt sed modi, corrupti rem! Fugit consequuntur optio cum ipsum quae nobis, ipsa pariatur ab deserunt quis blanditiis ut beatae ea. Nemo voluptas, dolore et quidem at, fugiat veritatis saepe repellat eaque atque quo dignissimos quis ex?
      </div>
    </>
  )
}

export default QuestionDetail