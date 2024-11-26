import React from 'react';
import SmallImage from './SmallImage';

function ImageLine(props) {
  return (
    <div className="body-main-image-line">
        {[1,1,1,1].map((j,i)=>
      <SmallImage key={i}/>
        )}
    </div>
  );
}

export default ImageLine;
