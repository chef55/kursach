import React from 'react';
function CommentLikeButton(props) {
  return (
    <div className='image-overlay-comment-like-wrapper'>
        <img src="https://e7.pngegg.com/pngimages/742/937/png-clipart-heart-emoji-emoticon-symbol-broken-heart-love-heart.png"className='image-overlay-comment-like-button'></img>
        <div className='image-overlay-comment-like-count'>1300</div>
    </div>
  );
}

export default CommentLikeButton;
