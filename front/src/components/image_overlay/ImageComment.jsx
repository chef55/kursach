import React from 'react';
import ImageCommentProfile from './ImageCommentProfile';
import CommentLikeButton from './CommentLikeButton';
import { useSelector } from 'react-redux';
function ImageComment(props) {
  console.log(props.comment)
  return (
    <div className='image-overlay-comments-single'>
        <div className='image-overlay-comments-single-profile-date'>
            <ImageCommentProfile username={props.comment.user.username} user_id={props.comment.user.id}/>
            <div className='image-overlay-comments-single-date'>{props.comment.date}</div>
        </div>
        <div className='image-overlay-comments-single-text'>
          {props.comment.text}
        </div>
    </div>
  );
}

export default ImageComment;
