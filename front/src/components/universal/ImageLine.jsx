import React from 'react';
import SmallImage from './SmallImage';

function ImageLine(props) {
  return (
    <div className="body-main-image-line">
        {[1,1,1,1].map(()=>
      <SmallImage/>
        )}
    </div>
  );
}

export default ImageLine;
