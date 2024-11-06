import React from 'react';
import TextInput from './TextInput'
import {Link} from "react-router-dom";
import LoginButton from './LoginButton';
import { useDispatch } from 'react-redux';
import { update } from '../../slices/render';

function LoginForm(props) {
  const dispatch=useDispatch();
  return (
    <>
    <div className='login-close' onClick={()=>{dispatch(update({name:"login", value: false}))}}></div>
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
            <LoginButton/>
        </form>
        <div  className ='new-account-button' onClick={()=>{dispatch(update({name:"register", value: true}));dispatch(update({name:"login", value: false}))}}>Create a new account</div>
    </div>
    </>
  );
}

export default LoginForm;
