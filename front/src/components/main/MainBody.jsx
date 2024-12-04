import React from 'react';
import ImageLine from '../universal/ImageLine';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed, getNewFeed, getPost } from '../../slices/post';
function MainBody(props) {
  const dispatch=useDispatch()
  const ids = useSelector(state=>state.post.files.file_id)
  const user_ids = useSelector(state=>state.post.files.user_id)
  //const keys = useSelector(state=>state.post.files.max_key)
  return (
    <div className="body-main-wrapper">
        <ImageLine ids={ids} user_ids={user_ids}/>
        <div className='' onClick={()=>{dispatch(getNewFeed(16))}}>Load More</div>
    </div>
  );
}

export default MainBody;
