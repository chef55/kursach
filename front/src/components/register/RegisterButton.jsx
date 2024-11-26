import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import {postRegister} from "../../slices/register.js"
import { update } from '../../slices/render';

function RegisterButton(props) {
    const dispatch=useDispatch();
    const current=useSelector(state=>state.register.value)
    const ready=useSelector(state=>state.register.ready)
    const check_ready=()=>{
      return ready.email==="good"&&ready.password==="good"&&ready.username==="good"
    }
    return(
      <>
        {check_ready()?
        <>
          <div className='register-success'>Success!</div>
          <div className='register-success-link' onClick={()=>{
              dispatch(update({name:"register", value: false}))
              dispatch(update({name:"login", value: true}))
          }}>Continue to Log In</div>
        </>
          :<div className="login-submit-button" id="register_button"
          onClick={()=>{
              dispatch(postRegister(current)) 
          }}
      >Create Account</div>}
      </>
    )
}

export default RegisterButton;
