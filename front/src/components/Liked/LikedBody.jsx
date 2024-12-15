import React from 'react';
import ImageLine from '../universal/ImageLine';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed, getNewFeed, getPost } from '../../slices/post';
function LikedBody(props) {
  const dispatch=useDispatch()
  const ids = useSelector(state=>state.post.files.file_id)
  const user_ids = useSelector(state=>state.post.files.user_id)
  //const keys = useSelector(state=>state.post.files.max_key)
  return (
    <>

    <div className="body-main-wrapper">
    <div style={{fontSize: '3vmin'}}>Your liked posts</div>
        <ImageLine ids={ids} user_ids={user_ids}/>
    </div>
    </>
  );
}

export default LikedBody;
