import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { update } from '../../slices/render';
function LoginButton(props) {
  const dispatch=useDispatch();
  return (
    <div className="login-submit-button" onClick={()=>{
      dispatch(update({name:"login",value:true}))
      dispatch(update({name:"post",value:false}))
      dispatch(update({name:'register', value:false}))
      dispatch(update({name:'create_post', value:false}))
    }}>
        Log In
    </div>
  );
}

export default LoginButton;
