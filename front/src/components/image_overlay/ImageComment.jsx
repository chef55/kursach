import React from 'react';
import ImageCommentProfile from './ImageCommentProfile';
import CommentLikeButton from './CommentLikeButton';
function ImageComment(props) {
  return (
    <div className='image-overlay-comments-single'>
        <div className='image-overlay-comments-single-profile-date'>
            <ImageCommentProfile/>
            <div className='image-overlay-comments-single-date'>15:30 01.01.24</div>
        </div>
        <div className='image-overlay-comments-single-text'>
            comment comment comment comment comment comment comment comment comment comment 
        </div>
        <CommentLikeButton/>
    </div>
  );
}

export default ImageComment;
