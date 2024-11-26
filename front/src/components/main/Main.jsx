import Header from '../header/Header';
import ImageOverlay from '../image_overlay/ImageOverlay';
import MainBody from './MainBody';
import LoginForm from '../login/LoginForm';
import React from 'react';
import RegisterForm from '../register/RegisterForm';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getSession } from '../../slices/session';
import CreatePost from '../create_post/CreatePost';
function Main() {
  const dispatch=useDispatch();
  dispatch(getSession())
  return (
    <>
      <CreatePost/>
      <MainBody/>
    </>
  );
}

export default Main;
