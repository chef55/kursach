import React from 'react';
import ImageComment from './ImageComment';
import CommentInput from './CommentInput';
import { useSelector } from 'react-redux';
function ImageComments(props) {
  const comments = useSelector(state=>state.post.current.comments)
  const post_id = useSelector(state=>state.post.current.post_id)
  //console.log(comments)
  return (
    <div className='image-overlay-comments-wrapper'>
      <div className='image-overlay-comments'>
        {comments.map(c=><ImageComment comment={c}/>)}
      </div>
      <CommentInput post_id={post_id}/>
    </div>
  );
}

export default ImageComments;
