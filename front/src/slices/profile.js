import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    username:'',
    image_id:'',
    image_href:''
  }, 
    ready:false,
}



export const getProfileData=createAsyncThunk('profile/getProfileData',async(arg,{rejectWithValue})=>{
    try{
      //console.log(arg)
      const res = await axios.get('http://localhost:3001/user/'+arg,{withCredentials:true})
      ///console.log(res)
      const img = await axios.get('http://localhost:3001/user/image/'+res.data.image_id,{responseType:'blob'})
      const blob = new Blob([img.data], {type: img.headers['content-type'] })
      const href = URL.createObjectURL(blob)
      return {data: res.data, img: href}
    }
    catch(errors){
      const messages={email:{},username:{},password:{}}
      errors.response.data.message.map(error=>{
        messages[error.property]=error.constraints
      })
      return rejectWithValue(messages)
    }
  })

  export const getProfileImage=createAsyncThunk('profile/getProfileImage',async(arg,{rejectWithValue,getState})=>{
    try{
        const state=getState()
        const res = await axios.get('http://localhost:3001/user/image/'+arg,{responseType:'blob',withCredentials:true})
        const blob = new Blob([res.data], {type: 'image/jpeg' })
        const href = URL.createObjectURL(blob)
        return href
      }
      catch(error){
        return rejectWithValue(error)
      }
    })


  export const postProfileImage=createAsyncThunk('profile/postProfileImage',async(arg,{rejectWithValue})=>{
    try{
      const formData = await new FormData()
      await formData.append('file', arg[0])
      const res = await axios.post('http://localhost:3001/user/image',formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials:true,
      })
      return res.data
    }
    catch(error){
      return rejectWithValue(error)
    }
  })  


  export const profile=createSlice({
    name: 'profile',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
      updateReady:(state,action)=>{
        state.ready=action.payload.value
      },

    },
    extraReducers(builder) {
      builder
        .addCase(getProfileData.fulfilled, (state, action) => {
          //console.log(action.payload)
            state.value.username=action.payload.data.username
            state.value.image_id=action.payload.data.image_id
            state.value.image_href=action.payload.img
        })
        .addCase(getProfileData.rejected, (state, action) => {

        })
        .addCase(getProfileImage.fulfilled, (state, action) => {
            state.value.image_href=action.payload
        })
        .addCase(getProfileImage.rejected, (state, action) => {
            
        })
        .addCase(postProfileImage.fulfilled, (state, action) => {
            state.ready=true
        })
        .addCase(postProfileImage.rejected, (state, action) => {
            
        })
    }
  })

  export default profile.reducer;