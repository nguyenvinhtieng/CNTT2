import React from 'react'
import CommentItem from '../CommentItem/CommentItem'

export default function CommentThread() {
  return (
    <ul className="comment-thread">
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
      <CommentItem></CommentItem>
    </ul>
  )
}
