import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    username:'',
    image_id:'default_profile.png',
    image_href:null
  }, 
}

export const getProfileData=createAsyncThunk('profile/getProfileData',async(arg,{rejectWithValue})=>{
    try{
      const res = await axios.get('http://localhost:3001/user/'+arg,{withCredentials:true})
      //console.log(res.data)
      return res.data
    }
    catch(errors){
      const messages={email:{},username:{},password:{}}
      errors.response.data.message.map(error=>{
        messages[error.property]=error.constraints
      })
      return rejectWithValue(messages)
    }
  })

  export const getProfileImage=createAsyncThunk('profile/getProfileImage',async(arg,{rejectWithValue})=>{
    try{
        const res = await axios.get('http://localhost:3001/user/image/'+arg,{responseType:'blob'})
        const blob = new Blob([res.data], {type: 'image/jpeg' })
        const href = URL.createObjectURL(blob)
        return href
      }
      catch(error){
        return rejectWithValue(error)
      }
    })


  export const postProfileImage=createAsyncThunk('profile/postProfileImage',async(arg,{rejectWithValue})=>{
    const formData = new FormData()
    formData.append('file', arg.file[0])
    try{
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
        state.ready[action.payload.name]=action.payload.value;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(getProfileData.fulfilled, (state, action) => {
            state.value.username=action.payload.username
            state.value.image_id=action.payload.image_id
        })
        .addCase(getProfileData.rejected, (state, action) => {

        })
        .addCase(getProfileImage.fulfilled, (state, action) => {
            state.value.image_href=action.payload
        })
        .addCase(getProfileImage.rejected, (state, action) => {
            
        })
        .addCase(postProfileImage.fulfilled, (state, action) => {
            
        })
        .addCase(postProfileImage.rejected, (state, action) => {
            
        })
    }
  })

  export default profile.reducer;