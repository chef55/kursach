import React from 'react';
import ProfileButton from './ProfileButton';
import LikeButton from './LikeButton';
import trash from "../../trash.png"
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../../slices/post';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
function ImageDescription(props) {
  const current= useSelector(state=>state.post.current)
  const session = useSelector(store=>store.session.value.id)
  const dispatch=useDispatch()
  return (
    <div className='image-overlay-description'>
      {session==0?<div className='image-overlay-description-cover'><LoginButton/></div>:<></>}
      <div className='image-overlay-description-profile-like'>
        <ProfileButton/>
        {current.user_id==session?<img src={trash} className='trashcan-post' onClick={()=>{
          dispatch(deletePost(current.post_id))
          window.location="/profile/"+session
        }}></img>:<></>}
        <LikeButton/>
      </div>
      <div className='image-overlay-description-about'>
        {props.desc}
      </div>
    </div>
  );
}

export default ImageDescription;
