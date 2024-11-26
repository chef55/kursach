import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import {postLogIn} from "../../slices/login.js"

function LoginButton(props) {
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
        <div value="Log In" className="login-submit-button" id="login_button"
            onClick={()=>{
              dispatch(postLogIn(current))
            }}
        >Log In</div>
    )
}

export default LoginButton;
