import React from 'react';
import ImageLine from '../universal/ImageLine';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed, getPost } from '../../slices/post';
function MainBody(props) {
  const ids = useSelector(state=>state.post.files.file_id)
  const keys = [...Array(16).keys()]
  return (
    <div className="body-main-wrapper">
        <ImageLine ids={ids.slice(0,4)} keys={keys.slice(0,4)}/>
        <ImageLine ids={ids.slice(4,8)} keys={keys.slice(4,8)}/>
        <ImageLine ids={ids.slice(8,12)} keys={keys.slice(8,12)}/>
        <ImageLine ids={ids.slice(12,16)} keys={keys.slice(12,16)}/>
    </div>
  );
}

export default MainBody;
