import React from 'react';
import {Link} from "react-router-dom";
import { update, updatePost } from '../../slices/render';
import { useDispatch } from 'react-redux';

function NewPost(props) {
    const dispatch=useDispatch()
  return (
    <div className="header-button" onClick={()=>{
        dispatch(update({name:"login",value:false}))
        dispatch(update({name:"post",value:false}))
        dispatch(update({name:'register', value:false}))
        dispatch(update({name:'create_post', value:true}))
    }}>
        New Post
    </div>
  );
}

export default NewPost;
