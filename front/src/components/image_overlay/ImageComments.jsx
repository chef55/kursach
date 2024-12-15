import React from 'react';
import ImageComment from './ImageComment';
import CommentInput from './CommentInput';
import { useSelector } from 'react-redux';
function ImageComments(props) {
  const comments = useSelector(state=>state.post.current.comments)
  const post_id = useSelector(state=>state.post.current.post_id)
  const session = useSelector(store=>store.session.value.id)
  //console.log(comments)
  return (
    <div className='image-overlay-comments-wrapper'>
      {session==0?<div className='image-overlay-comments-block'></div>:<></>}
      <div className='image-overlay-comments'>
        {comments.map(c=><ImageComment comment={c} post_id={post_id}/>)}
      </div>
      <CommentInput post_id={post_id}/>
    </div>
  );
}

export default ImageComments;
