import React from 'react';
import { useDispatch } from 'react-redux';
import {Link} from "react-router-dom";

function ProfileButton(props) {
  const dispatch=useDispatch()

  return (
    <Link to={"/profile/"+props.user_id} className="image-overlay-description-profile">
        <img src="https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg" className='header-profile-button-image'></img>
        <div className='header-profile-button-name'>chef</div>
    </Link>
  );
}

export default ProfileButton;