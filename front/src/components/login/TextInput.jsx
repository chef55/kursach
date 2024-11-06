import axios from 'axios';
import React from 'react';
import checkInput from '../register/checkInput';
import { useDispatch } from 'react-redux';
import { update } from '../../slices/login';
import {Link} from "react-router-dom";

function TextInput(props) {
  const dispatch=useDispatch();
  return (
    <input type='text' className='login-form-input'
    onBlur={(event)=>{
    dispatch(update({name:props.name,value:event.target.value}))
    }}/>
  );
}

export default TextInput;
