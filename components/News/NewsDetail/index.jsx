import classNames from "classnames/bind";
import styles from "../News.module.scss";
const cx = classNames.bind(styles);

function NewsDetail() {
  return (
    <>
      <div className={cx("news-detail__head")}>
        <h2 className={cx("news-detail__title")}>
          Lorem ipsum dolor sit amet.
        </h2>
        <time className={cx("news-detail__time")}>10/10/2022 09:40am </time>
      </div>
      <div className={cx("news-detail__content")}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
        similique esse reiciendis delectus, adipisci excepturi facere, aliquid
        omnis soluta ipsa provident in totam molestiae a dicta nisi, quis qui
        error quod. Fugiat laborum recusandae nisi esse minima aspernatur
        commodi minus sapiente. Molestiae magnam asperiores enim ipsam eaque
        numquam nostrum ullam magni voluptatum ea nisi vel iste nulla
        cupiditate, aliquam impedit laboriosam beatae inventore amet repellat
        reiciendis. Velit dicta, nulla quis molestiae iure ullam saepe nam
        fugiat non rerum tenetur nisi quibusdam minus cum ea fuga reiciendis
        reprehenderit quod nostrum culpa illo. Libero ullam, deserunt vel ipsa a
        nostrum dolor in aperiam obcaecati? Ratione dicta eaque ipsam natus
        distinctio eligendi id accusantium quam exercitationem libero,
        doloremque deserunt? Odio libero hic officia aut eveniet facere, sed
        corrupti? Quisquam dignissimos provident soluta ab iste assumenda ex
        repellendus aliquam cupiditate et, dolorem veritatis consequuntur modi
        eos aperiam quae quos expedita possimus consectetur numquam totam
        deserunt nostrum! Perspiciatis libero sequi similique consequatur
        deserunt illum cumque quibusdam maiores? Quas numquam recusandae,
        reiciendis accusamus quos necessitatibus, aliquam autem amet voluptates
        earum natus porro cumque maxime voluptatibus vitae tenetur odit
        voluptatem, quibusdam esse minima architecto. Hic ratione modi id beatae
        nesciunt! Quo nihil aut aliquam neque. Corporis, aliquid.
      </div>
    </>
  );
}
export default NewsDetail;
