import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import {postRegister} from "../../slices/register.js"

function RegisterButton(props) {
    const dispatch=useDispatch();
    const current=useSelector(state=>state.login.value)
    const ready=useSelector(state=>state.login.ready)
    const check_ready=(ready)=>{
      let out=true
      Object.entries(ready).map((val)=>{
        if(val[1]!="good") {
          out=false
          return
        }
      })
      return out
    }
    return(
        <div className={check_ready(ready)?"login-submit-button":"login-submit-button"} id="register_button"
            onClick={()=>{
                check_ready(ready)? dispatch(postRegister(current))
                :window.alert("Не все данные введены корректно");
            }}
        >Create Account</div>
    )
}

export default RegisterButton;
