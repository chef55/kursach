import React from 'react';
import ImageDescription from './ImageDescription';
import ImageComments from './ImageComments';
import { useDispatch, useSelector } from 'react-redux';
import { update} from '../../slices/render';
function ImageOverlay(props) {
  const post= useSelector(state=>state.post.files)
  const render = useSelector(state=>state.post.current)
  const dispatch=useDispatch()
  //console.log(post.description[render.key])
  //console.log(render.description)
  return (
    <>
    <div className='login-close' onClick={()=>{dispatch(update({name:'post',value:false}))}}></div>
    <div className='image-overlay'>
        <div className='image-overlay-image-description'>
            <div className='image-overlay-image-wrapper'>
                <img src={post.file_href[render.key]} className='image-overlay-image'></img>
            </div>
            <ImageDescription render={render} post_id={post.post_id[render.key]} desc={post.description[render.key]} user_id={post.user_id[render.key]}/>
        </div>
        <ImageComments/>
    </div>
    </>
  );
}

export default ImageOverlay;
