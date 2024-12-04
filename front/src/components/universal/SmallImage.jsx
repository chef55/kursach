import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComments, getPost, updateCurrent } from '../../slices/post';
import { getLiked, getPostLikes } from '../../slices/post';
import { update } from '../../slices/render';

function SmallImage(props) {
  const state= useSelector(state=>state.post.files)
  const dispatch=useDispatch()
  return (
    <div className="image-wrapper">
      {state.file_href[props.k]?
      <img src={state.file_href[props.k]} className='small-image' onClick={()=>{
        dispatch(getPostLikes(state.post_id[props.k]))
        dispatch(getLiked(state.post_id[props.k]))
        dispatch(getComments(state.post_id[props.k]))
        dispatch(updateCurrent(props.k))
        dispatch(update({name:'post',value:true}))
      }}/>
      :<div className='small-image loader-border'>
        <span className="loader"></span>
      </div>
      }
    </div>
  );
}

export default SmallImage;
