import React from 'react';
import SmallImage from './SmallImage';
import { useDispatch } from 'react-redux';
import { getPostImage } from '../../slices/post';

function ImageLine(props) {
  const dispatch=useDispatch()
  props.ids.map((e,i)=>{
    dispatch(getPostImage({image_id:e, key:props.keys[i]}))
  })
  return (
    <div className="body-main-image-line" >
      {props.ids.map((e,i)=><SmallImage id={e} k={props.keys[i]}/>)}
    </div>
  );
}

export default ImageLine;
