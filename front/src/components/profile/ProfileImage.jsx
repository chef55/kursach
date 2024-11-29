import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../../slices/post';
import { updatePost } from '../../slices/render';

function ProfileImage(props) {
    const state=useSelector(state=>state.profile.value)
  return (
    <div className="image-wrapper">
      {state.image_href!=null?<img src={state.image_href} className='small-image'/>
      :<div className='small-image loader-border'>
        <span className="loader"></span>
      </div>
      }
    </div>
  );
}

export default ProfileImage;
