import '../../style.css';
import Header from '../header/Header';
import React from 'react';
import ProfileBody from './ProfileBody';
import { useDispatch } from 'react-redux';
import { getSession } from '../../slices/session';
function Profile() {
  const dispatch=useDispatch();
  dispatch(getSession())
  return (
    <>
      <ProfileBody/>
    </>
  );
}

export default Profile;
