import HeaderButton from './HeaderButton';
import HeaderProfile from './HeaderProfile'
import LogoButton from './LogoButton';
import LoginButton from './LoginButton';
import React from 'react';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../register/RegisterForm';
import { useDispatch, useSelector } from "react-redux"
import { getSession } from '../../slices/session';
function Header(props) {
  const render=useSelector(state=>state.render.value)
  const session=useSelector(state=>state.session.value)
  //const dispatch=useDispatch();
  //dispatch(getSession())
  return (
    <>
    <div className="header-outer-wrapper">
      <div className='header-inner-wrapper'>   
      <LogoButton/>
          {props.button_names.map((val,i)=>
              <HeaderButton key={i} name={val} path={props.button_paths[i]}/>
          )}
      </div>
      {session.auth?<HeaderProfile username={session.username}/>:<LoginButton/>}
    </div>
    {render.login?<LoginForm/>:<></>}
    {render.register?<RegisterForm/>:<></>}
    </>
  );
}

export default Header;
