import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from "react-redux"
import { update, updateReady } from '../../slices/register';
import {Link} from "react-router-dom";

function TextInput(props) {
  const ready=useSelector(state=>state.register.ready)
  const dispatch=useDispatch();
  return (
    <div>
    <input type={props.name=="password"?"password":"text"} className='login-form-input'
    onBlur={(event)=>{
    dispatch(update({name:props.name,value:event.target.value}))
    }}/>
    <div className='error-field'>{ready[props.name]=="good"?"":ready[props.name]}</div>
    </div>
  );
}

export default TextInput;
