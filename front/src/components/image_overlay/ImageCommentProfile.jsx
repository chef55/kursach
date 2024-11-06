import React from 'react';
import {Link} from "react-router-dom";

function ImageCommentProfile(props) {
  return (
    <Link to="/profile" className="image-overlay-comment-profile">
        <img src="https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg" className='image-overlay-comment-profile-image'></img>
        <div className='image-overlay-comment-profile-name'>chef</div>
    </Link>
  );
}

export default ImageCommentProfile;