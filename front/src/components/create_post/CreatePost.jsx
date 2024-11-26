import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postPost, update } from '../../slices/post';

function CreatePost(props) {
  const dispatch=useDispatch()
  //const ready=useSelector(state=>state.post.ready)
  //var file = ''
  return (
    <>
      <form className='create-post-wrapper' encType='multipart/form-data' onSubmit={(event)=>{
          event.preventDefault()
          //const text=document.getElementById("create-post-text").value
          const file=document.getElementById('create-post-file').files
          const text = document.getElementById('create-post-text').value
          //console.log(file)
          dispatch(postPost({file: file, description: text}))
      }}>
          <div className='create-post-label'>Description</div>
          {<textarea type="text" className='create-post-text' id="create-post-text"></textarea>
          }
        <input type="file" accept="image/*" className='create-post-file' id="create-post-file"></input>
        <button className='login-submit-button'>Create Post</button>
      </form>
    </>
  );
}

export default CreatePost;
