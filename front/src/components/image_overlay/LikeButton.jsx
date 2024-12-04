import React from 'react';
import ProfileButton from './ProfileButton';
import { useDispatch, useSelector } from 'react-redux';
import { postLike } from '../../slices/post';
import heart_filled from "./heart-filled.png"
import heart_hollow from "./heart-hollow.png"
function LikeButton(props) {
  const store = useSelector(store=>store.post.current)
  const dispatch=useDispatch()
  return (
    <div className='image-overlay-description-like-wrapper'>
        <img src={store.liked?heart_filled:heart_hollow}className='image-overlay-description-like-button' onClick={
          ()=>{
            dispatch(postLike({post:store.post_id}))
          }
        }></img>
        <div className='image-overlay-description-like-count'>{store.likes}</div>
    </div>
  );
}

export default LikeButton;
