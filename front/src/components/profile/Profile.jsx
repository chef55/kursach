import '../../style.css';
import Header from '../header/Header';
import React from 'react';
import ProfileBody from './ProfileBody';
import { useDispatch } from 'react-redux';
import { getSession } from '../../slices/session';
import { useParams } from 'react-router-dom';
import { getProfileData, getProfileImage } from '../../slices/profile';
function Profile() {
  const dispatch=useDispatch();
  const props=useParams()
    dispatch(getSession())
    dispatch(getProfileData(props.id))
  //dispatch(getProfileImage())
  return (
    <>
      <ProfileBody/>
    </>
  );
}

export default Profile;
