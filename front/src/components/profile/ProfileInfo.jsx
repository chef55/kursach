import { useDispatch, useSelector } from 'react-redux';
import '../../style.css';
import React from 'react';
import ProfileImage from './ProfileImage';
import { deleteSession } from '../../slices/session';
import { update } from '../../slices/render';
import { postProfileImage } from '../../slices/profile';

function ProfileInfo(props) {
  const store=useSelector(store=>store.profile.value)
  const ready=useSelector(store=>store.profile.ready)
  const render = useSelector(store=>store.render.value.upload_button)
  const session = useSelector(store=>store.session.value)
  const dispatch=useDispatch()
  return (
    <>
        <div className='profile-info-wrapper'>
            <ProfileImage/>
            <div className='profile-info-name-about'>
                <div className='profile-info-name'>{store.username}</div>
                {session.auth?<><form encType='multipart/form-data' style={{display:'flex'}}onSubmit={(event)=>{
                  event.preventDefault()
                  dispatch(postProfileImage(document.getElementById('new-image-file').files))
                }}>
                  <label htmlFor="new-image-file" className='new-image-file-label'>New Profile Picture</label>
                  {render?<button className='profile-submit-button' type="submit">Upload</button>:<></>}
                  <input type="file" accept="image/*" className='new-image-file' id="new-image-file" onInput={
                    ()=>{
                      dispatch(update({name:"upload_button", value: true}))
                  }}></input>
                </form>
                <div className='profile-logout-button' onClick={()=>{dispatch(deleteSession())}}>Log Out</div></>:<></>}<></>
            </div>
            {//кринж поменять
              ready?<a onClick={document.location.reload()}></a>:<></>
            }
        </div>
    </>
  );
}

export default ProfileInfo;