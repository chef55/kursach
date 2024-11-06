import React from 'react';
import ProfileButton from './ProfileButton';
function LikeButton(props) {
  return (
    <div className='image-overlay-description-like-wrapper'>
        <img src="https://e7.pngegg.com/pngimages/742/937/png-clipart-heart-emoji-emoticon-symbol-broken-heart-love-heart.png"className='image-overlay-description-like-button'></img>
        <div className='image-overlay-description-like-count'>1300</div>
    </div>
  );
}

export default LikeButton;
