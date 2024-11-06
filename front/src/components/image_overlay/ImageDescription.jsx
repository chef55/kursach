import React from 'react';
import ProfileButton from './ProfileButton';
import LikeButton from './LikeButton';
function ImageDescription(props) {
  return (
    <div className='image-overlay-description'>
      <div className='image-overlay-description-profile-like'>
        <ProfileButton/>
        <LikeButton/>
      </div>
      <div className='image-overlay-description-about'>
        descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton descripton
      </div>
    </div>
  );
}

export default ImageDescription;
