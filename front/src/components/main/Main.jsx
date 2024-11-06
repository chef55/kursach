import Header from '../header/Header';
import ImageOverlay from '../image_overlay/ImageOverlay';
import MainBody from './MainBody';
import LoginForm from '../login/LoginForm';
import React from 'react';
import RegisterForm from '../register/RegisterForm';
import axios from 'axios'
function Main() {
  return (
    <>
      <Header
        button_names={["Search", "Subscriptions"]}
        button_paths={[ '/','/' ]}  
      />
      <img src=""></img>
      <MainBody/>
    </>
  );
}

export default Main;
