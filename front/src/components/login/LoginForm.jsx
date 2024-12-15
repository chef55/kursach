import React from 'react';
import TextInput from './TextInput'
import {Link} from "react-router-dom";
import LoginButton from './LoginButton';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../slices/render';
import { dropReady } from '../../slices/login';

function LoginForm(props) {
  const dispatch=useDispatch();
  const ready=useSelector(state=>state.login.ready)
  return (
    <>
    <div className='login-close' onClick={()=>{dispatch(update({name:"login", value: false}));dispatch(dropReady())}}></div>
    <div className='login-form-outer-wrapper'>
        <form className='login-form'>
            <div className='login-form-row-wrapper'>
                <div className='login-form-row-text'>Username</div>
                <TextInput name="username"/>
            </div>
            <div className='login-form-row-wrapper'>
                <div className='login-form-row-text'>Password</div>
                <TextInput name="password"/>
            </div>
            <div className='error-field'>{ready=="good"?"":ready}</div>
            <LoginButton/>
        </form>
        <div  className ='new-account-button' onClick={()=>{
          dispatch(update({name:"login",value:false}))
          dispatch(update({name:"post",value:false}))
          dispatch(update({name:'register', value:true}))
          dispatch(update({name:'create_post', value:false}))}
        }>Create a new account</div>
      </div>
    </>
  );
}

export default LoginForm;
