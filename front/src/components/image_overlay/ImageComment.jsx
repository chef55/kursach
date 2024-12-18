import React from 'react';
import ImageCommentProfile from './ImageCommentProfile';
import CommentLikeButton from './CommentLikeButton';
import { useDispatch, useSelector } from 'react-redux';
import trash from "../../trash.png"
import { deleteComment, getComments } from '../../slices/post';
import { Link } from 'react-router-dom';
function ImageComment(props) {
  const session = useSelector(store=>store.session.value.id)
  const dispatch=useDispatch()
  return (
    <div className='image-overlay-comments-single'>
        <div className='image-overlay-comments-single-profile-date'>
            <ImageCommentProfile username={props.comment.user.username} user_id={props.comment.user.id}/>

            {props.comment.user.id==session||session==1?<img src={trash} className='trashcan-comment' onClick={()=>{
              dispatch(deleteComment({comment_id:props.comment.id,post_id: props.post_id}))
              dispatch(getComments(props.post_id))
              //console.log(props.comment.id)
            }}></img>:<></>}

            <div className='image-overlay-comments-single-date'>{props.comment.date}</div>
        </div>
        <div className='image-overlay-comments-single-text'>
          {props.comment.text}
        </div>
    </div>
  );
}

export default ImageComment;
