import React from 'react';
import ProfileButton from './ProfileButton';
import LikeButton from './LikeButton';
import { useSelector } from 'react-redux';
function ImageDescription(props) {
  return (
    <div className='image-overlay-description'>
      <div className='image-overlay-description-profile-like'>
        <ProfileButton/>
        <LikeButton/>
      </div>
      <div className='image-overlay-description-about'>
        {props.desc}
      </div>
    </div>
  );
}

export default ImageDescription;
