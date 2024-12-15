import '../../style.css';
import React from 'react';
import ImageLine from '../universal/ImageLine';
import { useSelector } from 'react-redux';
function ProfileImages() {
  const ids = useSelector(state=>state.post.files.file_id)
  const user_ids = useSelector(state=>state.post.files.user_id)
  return (
    <div className='profile-images'>
        <div className='profile-images-text'>User's posts</div>
        <ImageLine ids={ids} user_ids={user_ids}/>
    </div>
  );
}

export default ProfileImages;