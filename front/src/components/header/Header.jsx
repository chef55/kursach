import HeaderButton from './HeaderButton';
import HeaderProfile from './HeaderProfile'
import LogoButton from './LogoButton';
import LoginButton from './LoginButton';
import React from 'react';
import LoginForm from '../login/LoginForm';
import RegisterForm from '../register/RegisterForm';
import { useDispatch, useSelector } from "react-redux"
import { getSession } from '../../slices/session';
import ImageOverlay from '../image_overlay/ImageOverlay';
import CreatePost from '../create_post/CreatePost';
import NewPost from './NewPost';
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
        <NewPost/>
      </div>
      {session.auth?<HeaderProfile username={session.username}/>:<LoginButton/>}
    </div>
    {render.login?<LoginForm/>:<></>}
    {render.register?<RegisterForm/>:<></>}
    {render.post?<ImageOverlay/>:<></>}
    {render.create_post?<CreatePost/>:<></>}
    </>
  );
}

export default Header;
