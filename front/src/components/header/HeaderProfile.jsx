import React from 'react';
import {Link} from "react-router-dom";

function HeaderProfile(props) {
  return (
    <Link to="/profile" className="header-profile-button-outer-wrapper">
        <div className='header-profile-button-name'>{props.username}</div>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg" className='header-profile-button-image'></img>
    </Link>
  );
}

export default HeaderProfile;
