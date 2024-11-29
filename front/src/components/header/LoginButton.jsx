import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { update } from '../../slices/render';
function LoginButton(props) {
  const dispatch=useDispatch();
  return (
    <div className="header-button header-login-button" onClick={()=>{
      dispatch(update({name:"login", value: true}))
      dispatch(update({name:"register", value: false}))
    }}>
        {'Log In'}
    </div>
  );
}

export default LoginButton;
