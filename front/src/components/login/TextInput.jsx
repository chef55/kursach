import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../slices/login';

function TextInput(props) {
  const ready=useSelector(state=>state.login.ready)
  const dispatch=useDispatch();
  return (
    <div>
    <input type='text' className='login-form-input'
    onBlur={(event)=>{
      dispatch(update({name:props.name,value:event.target.value}))
    }}/>
    </div>
  );
}

export default TextInput;
