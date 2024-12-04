import React from 'react';
import SmallImage from './SmallImage';
import { useDispatch } from 'react-redux';
import { getPostImage, getUserImageAndName } from '../../slices/post';

function ImageLine(props) {
  const dispatch=useDispatch()
  props.ids.map((e,i)=>{
    dispatch(getPostImage({image_id:e, key:i}))
    dispatch(getUserImageAndName({user_id:props.user_ids[i], key:i}))
  })
  return (
    <div className="body-main-image-line" >
      {props.ids.map((e,i)=><SmallImage id={e} k={i}/>)}
    </div>
  );
}

export default ImageLine;
