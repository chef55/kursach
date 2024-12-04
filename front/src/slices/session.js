import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
        auth:false,
        id:null,
        username: null,
        image:null
  }, 
}

  export const getSession=createAsyncThunk('session/getSession',async(arg,{rejectWithValue})=>{
      const res = await axios.get('http://localhost:3001/auth',{withCredentials:true})
      const user = await axios.get('http://localhost:3001/user/'+res.data.user.id,{withCredentials:true})
      const img = await axios.get('http://localhost:3001/user/image/'+user.data.image_id,{responseType:'blob'})
      const blob = new Blob([img.data], {type: img.headers['content-type'] })
      const href = URL.createObjectURL(blob)
      return {data: res.data.user, img: href}
  })

  export const deleteSession=createAsyncThunk('session/deleteSession',async()=>{
    const res = await axios.get('http://localhost:3001/auth/delete',{withCredentials:true})
    return res.data
  })

  export const session=createSlice({
    name: 'session',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(getSession.fulfilled, (state, action) => {
            state.value.auth=true
            state.value.id=action.payload.data.id
            state.value.username=action.payload.data.username
            state.value.image=action.payload.img
        })
        .addCase(getSession.rejected, (state, action) => {
            state.value.auth=false
            state.value.id=''
            state.value.username=''
            //console.log(action.error)
        })
        .addCase(deleteSession.fulfilled, (state, action) => {
          window.location.reload();
        })
        .addCase(deleteSession.rejected, (state, action) => {
          
        })
    }
  })

  //export const { update,updateReady,dropReady } = logIn.actions;
  export default session.reducer;
