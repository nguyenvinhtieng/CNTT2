import React from "react";
import { BiDownvote, BiShareAlt, BiUpvote } from "react-icons/bi";
import { RiMessage3Line } from "react-icons/ri";
import CommentItem from "~/components/CommentItem/CommentItem";
import CommentThread from "~/components/CommentThread/CommentThread";
import Modal from "~/components/Modal/Modal";
import PostItem from "~/components/PostItem/PostItem";
import UserItem from "~/components/UserItem/UserItem";

export default function PostDetail() {
  return (
    <div className="container">
      <div className="post-detail">
        <div className="post-detail__thumbail">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <h1 className="post-detail__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          optio.
        </h1>
        <div className="post-detail__info">
          <span className="post-detail__info--author">
            <UserItem></UserItem>
          </span>
          <time className="post-detail__info--date">10 nggày trước</time>
        </div>
        <div className="post-detail__info--tags">
          <ul className="tag-list">
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
            <li className="tag-item">#HTML</li>
          </ul>
        </div>
        <p className="post-detail__tldr">
          <span>Tóm tắt: </span>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eum ratione doloremque harum. Ex non aliquam id
          iusto quod expedita fugiat!
        </p>
        <div className="post-detail__content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          porro eveniet optio, itaque qui assumenda quo minus reprehenderit
          totam iste, non molestiae natus quas quia nemo fugit, consequuntur
          harum nisi aliquam? Dicta dolore in cupiditate quaerat veniam?
          Inventore minima explicabo rerum, rem architecto repudiandae,
          necessitatibus at repellendus nulla dolorem nam eum animi! Corrupti
          culpa dolorem ducimus quam tempora numquam laborum libero est
          suscipit. Saepe provident ut a! Blanditiis totam perspiciatis cum
          dignissimos, aspernatur numquam veritatis! Rerum, cumque incidunt
          numquam iusto voluptate cum adipisci ducimus aspernatur fugit velit
          perferendis natus nobis totam, dolores quis enim laudantium est,
          molestias repellendus. Eveniet cum soluta fuga porro, ullam recusandae
          quod ea voluptas? Molestiae ea nesciunt earum doloribus minima culpa
          ratione debitis reiciendis, facere rerum quae nostrum illo. Expedita
          vero officiis minus nemo? Assumenda, deserunt ab numquam qui dolorem
          dignissimos, quaerat mollitia error neque itaque soluta maxime
          possimus voluptas odit eligendi reprehenderit est? Nihil illum
          corporis suscipit veniam itaque. Laborum velit aut modi vero eligendi,
          nulla consectetur et tempora repellat consequuntur numquam expedita
          quo itaque doloremque at nisi assumenda suscipit exercitationem
          mollitia eos! Eum, doloremque labore. Sint sequi suscipit enim itaque,
          ullam cumque laboriosam commodi sed quibusdam corrupti optio
          voluptates porro distinctio eaque facere rerum aspernatur. Reiciendis,
          fugiat, reprehenderit nisi voluptates cum voluptatibus eveniet veniam
          neque error quaerat et necessitatibus provident exercitationem
          laboriosam ut eum amet omnis ipsum, atque tenetur eligendi obcaecati!
          Quam reprehenderit dolorem voluptate dignissimos eligendi! Omnis ab
          repudiandae, eius delectus a qui quo sunt? Ullam quam harum nobis
          deserunt ut sapiente delectus corporis vero, debitis, mollitia
          eligendi nemo. Nam quae maxime eum. Porro magni eius obcaecati
          adipisci impedit excepturi provident in! Dolorem, totam. Illum tempore
          totam dolor consectetur ex numquam, harum porro aspernatur, vel
          quaerat assumenda incidunt animi labore. Error consectetur facere
          aliquid vitae maxime dolore tenetur dicta quia unde eligendi sit at
          magni corrupti dolor expedita quo nemo, explicabo illum eum fuga et
          voluptatum in velit. Dolore ipsum ipsa numquam et saepe, neque
          excepturi corporis nisi quis quas veniam quia molestias aperiam
          reiciendis nostrum esse sint nemo aliquid recusandae reprehenderit
          consectetur culpa! Natus quaerat itaque alias rem tempora hic at, eos
          omnis commodi, fuga sapiente, minus pariatur culpa quo laborum ipsam
          voluptas excepturi amet. Maxime aperiam voluptates eius id soluta
          optio inventore, quo ducimus, in expedita aliquam iusto labore hic
          nobis. Similique in aperiam, consectetur maiores maxime quas
          repudiandae iusto corrupti impedit laudantium repellendus inventore
          unde esse dicta quod obcaecati fuga, incidunt praesentium temporibus
          molestiae aspernatur. Corrupti deleniti, id nihil porro dolore, sint
          expedita quo nam modi cum libero, neque impedit voluptatum consequatur
          fugiat aut. Natus cupiditate ipsam reiciendis sed, voluptas voluptatum
          magni facilis amet minima ab laborum aut, ipsa ut aliquid fuga. Alias
          corrupti, incidunt odio veritatis aperiam nulla esse unde deserunt
          eveniet odit quas laborum reprehenderit, vel praesentium. Doloremque
          magnam similique culpa! Accusamus, in nihil natus error eligendi
          voluptatem dolorem nulla numquam harum id quibusdam dolore officiis
          non illo similique culpa veritatis assumenda illum porro ad cum.
          Consequuntur repellendus fugiat labore alias pariatur doloremque iure
          dolorum dolor quasi veritatis.
        </div>
        <div className="post-detail__reactInfo">
          <span>120 UpVote </span>
          <span>160 Downvote</span>
          <span>20 Bình luận</span>
        </div>
        <ul className="post-detail__actions">
          <li className="post-detail__action is-active">
            <div className="post-detail__action--wrapper" data-tip="Upvote">
              <span className="post-detail__action--ico">
                <BiUpvote></BiUpvote>
              </span>
              <span className="post-detail__action--text">Upvote</span>
            </div>
          </li>
          <li className="post-detail__action">
            <div className="post-detail__action--wrapper" data-tip="Downvote">
              <span className="post-detail__action--ico">
                <BiDownvote></BiDownvote>
              </span>
              <span className="post-detail__action--text">Downvote</span>
            </div>
          </li>
          <li className="post-detail__action">
            <div
              className="post-detail__action--wrapper"
              data-tip="Bình luận bài viết"
            >
              <span className="post-detail__action--ico">
                <RiMessage3Line></RiMessage3Line>
              </span>
              <span className="post-detail__action--text">Bình luận</span>
            </div>
          </li>
          <li className="post-detail__action">
            <div
              className="post-detail__action--wrapper"
              data-tip="Chia sẻ lên facebook"
            >
              <span className="post-detail__action--ico">
                <BiShareAlt></BiShareAlt>
              </span>
              <span className="post-detail__action--text">Chia sẻ</span>
            </div>
          </li>
        </ul>

        <div className="post-detail__comments">
          <CommentThread></CommentThread>
          <CommentThread></CommentThread>
          <CommentThread></CommentThread>
        </div>

        <div className="post-detail__related">
          <h3>Bài viết liên quan</h3>
          <ul className="post-detail__related--list">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
          </ul>
        </div>
      </div>
    </div>
  );
}
