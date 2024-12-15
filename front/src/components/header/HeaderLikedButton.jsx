import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { update } from '../../slices/render';

function HeaderLikedButton(props) {
  const store=useSelector(state=>state.session.value)
  const dispatch=useDispatch()
  return (
    <Link to={"/liked"} className="header-button"onClick={()=>{
      dispatch(update({name:"login",value:false}))
      dispatch(update({name:"post",value:false}))
      dispatch(update({name:'register', value:false}))
      dispatch(update({name:'create_post', value:false}))
  }}>
    Your Likes
    </Link>
  );
}

export default HeaderLikedButton;
