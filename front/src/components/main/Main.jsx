import Header from '../header/Header';
import ImageOverlay from '../image_overlay/ImageOverlay';
import MainBody from './MainBody';
import LoginForm from '../login/LoginForm';
import React from 'react';
import RegisterForm from '../register/RegisterForm';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../../slices/session';
import CreatePost from '../create_post/CreatePost';
import { getFeed } from '../../slices/post';
function Main() {
  const dispatch=useDispatch();
  dispatch(getSession())
  dispatch(getFeed(16))
  return (
    <>
      <MainBody />
    </>
  );
}

export default Main;
