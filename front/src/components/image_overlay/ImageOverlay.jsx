import React from 'react';
import ImageDescription from './ImageDescription';
import ImageComments from './ImageComments';
import { useDispatch, useSelector } from 'react-redux';
function ImageOverlay(props) {
  const post= useSelector(state=>state.post.files)
  const render = useSelector(state=>state.render.value.post)
  const dispatch=useDispatch()
  console.log(render.description)
  return (
    <>
    <div className="image-overlay-shadow"></div>
    <div className='image-overlay'>
        <div className='image-overlay-image-description'>
            <div className='image-overlay-image-wrapper'>
                <img src={post.file_href[render.key]} className='image-overlay-image'></img>
            </div>
            <ImageDescription desc={render.description}/>
        </div>
        <ImageComments/>
    </div>
    </>
  );
}

export default ImageOverlay;
