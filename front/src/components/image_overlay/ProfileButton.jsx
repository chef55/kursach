import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { update } from '../../slices/render';

function ProfileButton(props) {
  const dispatch=useDispatch()
  const current= useSelector(state=>state.post.current)
  return (
    <Link to={"/profile/"+current.user_id} className="image-overlay-description-profile" onClick={()=>{
      dispatch(update({name:"login",value:false}))
      dispatch(update({name:"post",value:false}))
      dispatch(update({name:'register', value:false}))
      dispatch(update({name:'create_post', value:false}))}
    }>
        <img src={current.user_image} className='header-profile-button-image'></img>
        <div className='header-profile-button-name'>{current.username}</div>
    </Link>
  );
}

export default ProfileButton;