import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux"
import {postLogIn} from "../../slices/login.js"

function LoginButton(props) {
    const dispatch=useDispatch();
    const current=useSelector(state=>state.login.value)
    const ready=useSelector(state=>state.login.ready)
    return(
        <div value="Log In" className="login-submit-button" id="login_button"
            onClick={()=>{
              dispatch(postLogIn(current))
            }}
        >Log In</div>
    )
}

export default LoginButton;
