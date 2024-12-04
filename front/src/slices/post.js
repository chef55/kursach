import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    files:{
      //max_key:[4,8,12,16],
      sent:[],
      user_sent:[],
      post_id:[],
      user_id:[],
      description: [],
      file_id: [],
      file_href:[],
      likes:[],
      username:[],
      user_image:[],
    },
    current:{
      key:null,
      post_id:0,
      user_id:0,
      likes:0,
      liked:false,
      username:'',
      user_image:null,
      comments:[]
    }
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

  export const getPostImage=createAsyncThunk('post/getPostImage',async(arg, {rejectWithValue,getState,dispatch})=>{
    try{
      const state=getState().post.files
      if(!state.sent[arg.key]){
        dispatch(updateSent(arg.key))
        const res = await axios.get('http://localhost:3001/post/image/'+arg.image_id,{withCredentials:true,responseType:'blob'})
        const blob = new Blob([res.data], {type: 'image/jpeg' })
        const href = URL.createObjectURL(blob)
        return {href: href, key:arg.key,new:true}
      }
      return {new:false}
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getFeed=createAsyncThunk('post/getFeed',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/post/feed',{withCredentials:true})
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getNewFeed=createAsyncThunk('post/getNewFeed',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/post/feed',{withCredentials:true})
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getUserPosts=createAsyncThunk('post/getUserPosts',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/post/user/'+arg,{withCredentials:true})
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )





  export const getPostLikes=createAsyncThunk('post/getPostLikes',async(arg, {rejectWithValue})=>{
    try{
      //console.log(arg)
      const res = await axios.get('http://localhost:3001/like/post/'+arg,{withCredentials:true})
      //console.log(res)
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const postLike=createAsyncThunk('post/postLike',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.post('http://localhost:3001/like/create/',arg,{withCredentials:true})
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const postComment=createAsyncThunk('post/postComment',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.post('http://localhost:3001/comment/create/',arg,{withCredentials:true})
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getComments=createAsyncThunk('post/getComments',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/comment/'+arg,{withCredentials:true})
      //console.log(res.data)
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getLiked=createAsyncThunk('post/getLiked',async(arg, {rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/like/liked/'+arg,{withCredentials:true})
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
    }
  )

  export const getUserImageAndName=createAsyncThunk('post/getUserImageAndName',async(arg,{rejectWithValue,getState,dispatch})=>{
    try{
      const state=getState().post
      if(!state.files.user_sent[arg.key]){
        dispatch(updateUserSent(arg.key))
        const res = await axios.get('http://localhost:3001/user/'+arg.user_id,{withCredentials:true})
        //console.log(res.data)
        const img = await axios.get('http://localhost:3001/user/image/'+res.data.image_id,{responseType:'blob'})
        const blob = new Blob([img.data], {type: img.headers['content-type'] })
        const href = URL.createObjectURL(blob)
        //console.log({data: res.data.username,key:arg.key})
        return {data: res.data.username, img: href,key:arg.key,new:true}
      }
      return {new:false}
    }
    catch(errors){
      return rejectWithValue(errors)
    }
  })

  

  export const post=createSlice({
    name: 'post',
    initialState,
    reducers:{
      updateSent:(state,action)=>{
        state.files.sent[action.payload]=true
      },
      updateUserSent:(state,action)=>{
        state.files.user_sent[action.payload]=true
      },
      updateCurrent:(state,action)=>{
        state.current.key=action.payload
        state.current.post_id=state.files.post_id[action.payload]
        state.current.user_id=state.files.user_id[action.payload]
        state.current.username=state.files.username[action.payload]
        state.current.user_image=state.files.user_image[action.payload]
      },
    },
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
          if(action.payload.new)
          state.files.file_href[action.payload.key]=action.payload.href
        })
        .addCase(getPostImage.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getUserImageAndName.fulfilled, (state, action) => {
          if(action.payload.new){
          state.files.user_image[action.payload.key]=action.payload.img
          state.files.username[action.payload.key]=action.payload.data
          }
        })
        .addCase(getUserImageAndName.rejected, (state, action) => {
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
        .addCase(getUserPosts.fulfilled, (state, action) => {
          state.files.file_id=action.payload.images
          state.files.description=action.payload.description
          state.files.post_id=action.payload.ids
          state.files.user_id=action.payload.users
        })
        .addCase(getUserPosts.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getNewFeed.fulfilled, (state, action) => {
          //console.log(action.payload.images)
          state.files.file_id.push(...action.payload.images)
          //console.log(action.payload.images)
          state.files.description.push(...action.payload.description)
          state.files.post_id.push(...action.payload.ids)
          state.files.user_id.push(...action.payload.users)
        })
        .addCase(getNewFeed.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getPostLikes.fulfilled, (state, action) => {
          //console.log(action.payload)
          state.current.likes=action.payload
        })
        .addCase(getPostLikes.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(postLike.fulfilled, (state, action) => {
          //console.log(action.payload)
          state.current.likes=action.payload.likes
          state.current.liked=action.payload.liked
        })
        .addCase(postLike.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getLiked.fulfilled, (state, action) => {
          state.current.liked=action.payload
        })
        .addCase(getLiked.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(postComment.fulfilled, (state, action) => {
          state.current.comments=action.payload
        })
        .addCase(postComment.rejected, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(getComments.fulfilled, (state, action) => {
          state.current.comments=action.payload
        })
        .addCase(getComments.rejected, (state, action) => {
          //console.log(action.payload)
        })
        
    }
  })
  export const { updateCurrent , updateSent, updateUserSent} = post.actions;
  export default post.reducer;
