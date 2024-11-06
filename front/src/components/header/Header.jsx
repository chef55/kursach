import HeaderButton from './HeaderButton';
import HeaderProfile from './HeaderProfile'
import LogoButton from './LogoButton';
import LoginButton from './LoginButton';
import React from 'react';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../register/RegisterForm';
import { useSelector } from "react-redux"
function Header(props) {
  const render=useSelector(state=>state.render.value)
  return (
    <>
    <div className="header-outer-wrapper">
      <div className='header-inner-wrapper'>   
      <LogoButton/>
          {props.button_names.map((val,i)=>
              <HeaderButton name={val} path={props.button_paths[i]}/>
          )}
      </div>
      <LoginButton/>
    </div>
    {render.login?<LoginForm/>:<></>}
    {render.register?<RegisterForm/>:<></>}
    </>
  );
}

export default Header;
