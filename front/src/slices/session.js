import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
        auth:false,
        id:null,
        username: null,
  }, 
}

  export const getSession=createAsyncThunk('login/postLogin',async(arg,{rejectWithValue})=>{
      const res = await axios.get('http://localhost:3001/auth',{withCredentials:true})
      return res.data.user
  })

  export const session=createSlice({
    name: 'session',
    initialState,
    extraReducers(builder) {
      builder
        .addCase(getSession.fulfilled, (state, action) => {
            state.value.auth=true
            state.value.id=action.payload.id
            state.value.username=action.payload.username
            //console.log(action.payload)
        })
        .addCase(getSession.rejected, (state, action) => {
            state.value.auth=false
            state.value.id=''
            state.value.username=''
            //console.log(action.error)
        })
    }
  })

  //export const { update,updateReady,dropReady } = logIn.actions;
  export default session.reducer;
