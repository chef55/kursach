import '../../style.css';
import React from 'react';
function ProfileInfo() {
  return (
    <>
        <div className='profile-info-wrapper'>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg" className="profile-info-image"></img>
            <div className='profile-info-name-about'>
                <div className='profile-info-name'>chef</div>
                <div className='profile-info-about'>jashdihasdifjhsakjfhijsahfkjshkjfhs</div>
                <div className='profile-logout-button'>Log Out</div>
            </div>
        </div>
    </>
  );
}

export default ProfileInfo;