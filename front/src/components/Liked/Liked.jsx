import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../../slices/session';
import { dropPosts, getFeed, getUserLikes } from '../../slices/post';
import LikedBody from './LikedBody';
function Liked() {
  const dispatch=useDispatch();
  dispatch(getSession())
  dispatch(dropPosts())
  dispatch(getUserLikes())
  return (
    <>
      <LikedBody/>
    </>
  );
}

export default Liked;