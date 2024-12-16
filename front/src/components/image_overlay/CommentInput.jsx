import React from 'react';
import send from "./send.png"
import { useDispatch } from 'react-redux';
import { postComment } from '../../slices/post';
function CommentInput(props) {
  const dispatch=useDispatch()
  return (
    <div className='image-overlay-comments-input'>
        <textarea type="text" className='image-overlay-comments-input-input' id="comment-textarea" maxLength={98}></textarea>
        <div className='image-overlay-comment-send-wrapper'><img className="image-overlay-comment-send"src={send} onClick={()=>{
          const text=document.getElementById('comment-textarea').value
          dispatch(postComment({text:text, post: props.post_id}))
        }}></img></div>
    </div>
  );
}

export default CommentInput;
