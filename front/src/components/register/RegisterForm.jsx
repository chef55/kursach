import React from 'react';
import TextInput from './TextInput'
import {Link} from "react-router-dom";
import RegisterButton from './RegisterButton';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../slices/render';
import { dropReady} from '../../slices/register';

function RegisterForm(props) {
  const dispatch=useDispatch();

  return (
    <>
    <div className='login-close' onClick={()=>{
        dispatch(update({name:"register", value: false}))
        dispatch(dropReady())
        }}></div>
    <div className='login-form-outer-wrapper'>
        <form className='login-form'>
            <div className='login-form-row-wrapper'>
                <div className='login-form-row-text'>Email</div>
                <TextInput name="email"/>
            </div>
            <div className='login-form-row-wrapper'>
                <div className='login-form-row-text'>Username</div>
                <TextInput name="username"/>
            </div>
            <div className='login-form-row-wrapper'>
                <div className='login-form-row-text'>Password</div>
                <TextInput name="password"/>
            </div>
            <RegisterButton/>
        </form>
    </div>
    </>
  );
}

export default RegisterForm;
