import { useDispatch } from 'react-redux';
import '../../style.css';
import React from 'react';
//import { getProfileImage } from '../../slices/profile';
import ProfileImage from './ProfileImage';
import { getProfileImage } from '../../slices/profile';
function ProfileInfo(props) {
  const dispatch=useDispatch()
  dispatch(getProfileImage(props.image_id))
  //console.log(1)
  return (
    <>
        <div className='profile-info-wrapper'>
            <ProfileImage/>
            <div className='profile-info-name-about'>
                <div className='profile-info-name'>chef</div>
                <div className='profile-info-about'>jashdihasdifjhsakjfhijsahfkjshkjfhs</div>
                <div className='profile-logout-button'>Log Out</div>
            </div>
        </div>
    </>
  );
}

export default ProfileInfo;