import React from 'react';
import ProfileButton from './ProfileButton';
import LikeButton from './LikeButton';
import { useSelector } from 'react-redux';
function ImageDescription(props) {
  return (
    <div className='image-overlay-description'>
      <div className='image-overlay-description-profile-like'>
        <ProfileButton user_id={props.user_id}/>
        <LikeButton post_id={props.post_id}/>
      </div>
      <div className='image-overlay-description-about'>
        {props.desc}
      </div>
    </div>
  );
}

export default ImageDescription;
