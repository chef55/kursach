import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { update } from '../../slices/render';

function HeaderProfile(props) {
  const store=useSelector(state=>state.session.value)
  const dispatch=useDispatch()
  return (
    <Link to={"/profile/"+store.id} className="header-profile-button-outer-wrapper"onClick={()=>{
      dispatch(update({name:"login",value:false}))
      dispatch(update({name:"post",value:false}))
      dispatch(update({name:'register', value:false}))
      dispatch(update({name:'create_post', value:false}))
  }}>
        <div className='header-profile-button-name'>{props.username}</div>
        <img src={store.image} className='header-profile-button-image'></img>
    </Link>
  );
}

export default HeaderProfile;
