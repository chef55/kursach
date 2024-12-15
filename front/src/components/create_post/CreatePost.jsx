import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPost } from '../../slices/post';
import { update } from '../../slices/render';

function CreatePost(props) {
  const dispatch=useDispatch()
  const session=useSelector(state=>state.session.value.id)
  //var file = ''
  return (
    <>
    <div className='login-close' onClick={()=>{dispatch(update({name:'create_post', value:false}))}}></div>
      <form className='create-post-wrapper' encType='multipart/form-data' onSubmit={(event)=>{
          event.preventDefault()
          //const text=document.getElementById("create-post-text").value
          const file=document.getElementById('create-post-file').files
          const text = document.getElementById('create-post-text').value
          //console.log(file)
          dispatch(postPost({file: file, description: text, user: session}))
      }}>
          <div className='create-post-label'>Description</div>
          <textarea type="text" className='create-post-text' id="create-post-text"></textarea>
          
        <input type="file" accept="image/*" className='create-post-file' id="create-post-file"></input>
        <button className='login-submit-button' type="submit">Create Post</button>
      </form>
    </>
  );
}

export default CreatePost;
