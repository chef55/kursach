import '../../style.css';
import React from 'react';
import ProfileInfo from './ProfileInfo';
import ProfileImages from './ProfileImages';
function ProfileBody() {
  return (
    <div className='profile-body'>
        <ProfileInfo/>
        <ProfileImages/>
    </div>
  );
}

export default ProfileBody;
