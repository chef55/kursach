import '../../style.css';
import React from 'react';
import ImageLine from '../universal/ImageLine';
function ProfileImages() {
  return (
    <div className='profile-images'>
        <div className='profile-images-text'>User's saved images</div>
        <ImageLine/>
    </div>
  );
}

export default ProfileImages;