import React from 'react';
import ImageDescription from './ImageDescription';
import ImageComments from './ImageComments';
function ImageOverlay(props) {
  return (
    <>
    <div className="image-overlay-shadow"></div>
    <div className='image-overlay'>
        <div className='image-overlay-image-description'>
            <div className='image-overlay-image-wrapper'>
                <img src="https://upload.wikimedia.org/wikipedia/ru/1/15/The_Dark_Side_of_the_Moon.png" className='image-overlay-image'></img>
            </div>
            <ImageDescription/>
        </div>
        <ImageComments/>
    </div>
    </>
  );
}

export default ImageOverlay;
