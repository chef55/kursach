import React from 'react';
import ImageComment from './ImageComment';
import CommentInput from './CommentInput';
function ImageComments(props) {
  return (
    <div className='image-overlay-comments-wrapper'>
      <div className='image-overlay-comments'>
        <ImageComment/>
        <ImageComment/>
        <ImageComment/>
        <ImageComment/>
        <ImageComment/>
        <ImageComment/>
        <ImageComment/>
      </div>
      <CommentInput/>
    </div>
  );
}

export default ImageComments;
