import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PostItem from '../PostItem/PostItem'
import PostItemSkeleton from '../PostItemSkeleton/PostItemSkeleton'

export default function RelatedPost({post}) {
    const posts = useSelector(state => state.posts)
    const [postRelated, setPostRelated] = React.useState([]);
    useEffect(()=> {
        let tags = post.tags;
        let postsRelatedNew = []
        let numPost = 0;
        posts.data.forEach((p) => {
            if(numPost >= 3) return;
            if(p.author._id === post.author._id) {
                postsRelatedNew.push(p);
                numPost++;
            }
        })

        if(numPost < 3){
            posts.data.forEach((p) => {
                if(numPost >= 3) return;
                if(p._id !== post._id){
                    let count = 0;
                    tags.forEach((tag) => {
                        if(p.tags.indexOf(tag) !== -1){
                            count++;
                        }
                    })
                    if(count > 0 && numPost < 3){
                        postsRelatedNew.push({...p, count});
                        numPost++;
                    }
                }
            })
        }
        
        if(numPost < 3){
            posts.data.forEach((p) => {
                if(numPost >= 3) return;
                postsRelatedNew.push(p);
            })
        }

        setPostRelated(postsRelatedNew);
    }, [post, posts])
    if(!post) {
        return <ul className="post-detail__related--list">
        <PostItemSkeleton></PostItemSkeleton>
        <PostItemSkeleton></PostItemSkeleton>
        <PostItemSkeleton></PostItemSkeleton>
      </ul>
    }
  return (
    <ul className="post-detail__related--list">
        {postRelated.length > 0 && postRelated.map((item, _) => 
            <PostItem key={item._id} post={item}></PostItem>
        )}
    </ul>
  )
}
