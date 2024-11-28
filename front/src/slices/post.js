import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    files:{
      post_id:[],
      user_id:[],
      description: [],
      file_id: [],
      file_href:[] 
    },
}

  export const postPost=createAsyncThunk('post/postPost',async(arg, {rejectWithValue})=>{
    const formData = new FormData()
    formData.append('description', arg.description)
    formData.append('file', arg.file[0])
    try{
      const res = await axios.post('http://localhost:3001/post/create',formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials:true,
      })
      return res.data
    }
    catch(error){
      //console.log(error)
      return rejectWithValue(error)
    }
    }
  )

  export const getPostImage=createAsyncThunk('post/getPostImage',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/post/image/'+arg.image_id,{responseType:'blob'})
      const blob = new Blob([res.data], {type: 'image/jpeg' })
      const href = URL.createObjectURL(blob)
      return {href: href, key:arg.key}
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getFeed=createAsyncThunk('post/getFeed',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/post/feed')
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const post=createSlice({
    name: 'post',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(postPost.fulfilled, (state, action) => {
          state.files.description=action.payload.description
          //state.files.=action.payload.id
        })
        .addCase(postPost.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getPostImage.fulfilled, (state, action) => {
          state.files.file_href[action.payload.key]=action.payload.href
        })
        .addCase(getPostImage.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getFeed.fulfilled, (state, action) => {
          state.files.file_id=action.payload.images
          state.files.description=action.payload.description
          state.files.post_id=action.payload.ids
          state.files.user_id=action.payload.users
        })
        .addCase(getFeed.rejected, (state, action) => {
          //console.log(action.payload)
        })
    }
  })

  export default post.reducer;
