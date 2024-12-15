import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { update } from '../../slices/render';

function ImageCommentProfile(props) {
  const dispatch=useDispatch()
  return (
    <Link to={"/profile/"+props.user_id} className="image-overlay-comment-profile"
    onClick={()=>{
      dispatch(update({name:"login",value:false}))
      dispatch(update({name:"post",value:false}))
      dispatch(update({name:'register', value:false}))
      dispatch(update({name:'create_post', value:false}))}
    }>
    <div className='image-overlay-comment-profile-name'>{props.username}</div>
    </Link>
  );
}

export default ImageCommentProfile;