import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../slices/post';
import { updatePost } from '../../slices/render';

function SmallImage(props) {
  const state= useSelector(state=>state.post.files)
  const dispatch=useDispatch()
  return (
    <div className="image-wrapper">
      {state.file_href[props.k]?
      <img src={state.file_href[props.k]} className='small-image' onClick={()=>{dispatch(updatePost({image:state.file_href[props.k], description:state.description[props.k],render:true,key:props.k}))}}/>
      :<div className='small-image loader-border'>
        <span className="loader"></span>
      </div>
      }
    </div>
  );
}

export default SmallImage;
