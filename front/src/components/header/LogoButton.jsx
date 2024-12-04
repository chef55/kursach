import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";
import { update } from '../../slices/render';
function LogoButton(props) {
  const dispatch=useDispatch()
  return (
    <Link to='/' className="header-logo-button"onClick={()=>{
      dispatch(update({name:"login",value:false}))
      dispatch(update({name:"post",value:false}))
      dispatch(update({name:'register', value:false}))
      dispatch(update({name:'create_post', value:false}))
  }}>
        <img src="..\site_logo.png" className="header-logo-button-image"></img>
    </Link>
  );
}

export default LogoButton;
