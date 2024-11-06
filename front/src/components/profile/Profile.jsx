import '../../style.css';
import Header from '../header/Header';
import React from 'react';
import ProfileBody from './ProfileBody';
function Profile() {
  return (
    <>
      <Header
        button_names={["Search", "Subscriptions"]}
        button_paths={[ '/','/' ]}  
      />
      <ProfileBody/>
    </>
  );
}

export default Profile;
