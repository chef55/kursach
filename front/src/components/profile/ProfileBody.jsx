import '../../style.css';
import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileImages from './ProfileImages';
import { useSelector } from 'react-redux';
function ProfileBody(props) {
  const state=useSelector(state=>state.profile.value)
  return (
    <div className='profile-body'>
      <ProfileInfo image_id={state.image_id}/>
      <ProfileImages/>
    </div>
  );
}

export default ProfileBody;
