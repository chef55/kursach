import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    username:'',
    password:''
  }, 
    ready:''
}

  export const postLogIn=createAsyncThunk('login/postLogin',async(arg,{rejectWithValue})=>{
    try{
      const res = await axios.post('http://localhost:3001/auth',arg,{withCredentials:true})
      return res.data
    }
    catch(error){
      //console.log(error)
      return rejectWithValue(error.status)
    }
  })

  export const logIn=createSlice({
    name: 'login',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
      updateReady:(state,action)=>{
        state.ready[action.payload.name]=action.payload.value;
      },
      dropReady:(state)=>{
        state.ready=""
      }
    },
    extraReducers(builder) {
      builder
        .addCase(postLogIn.fulfilled, (state, action) => {
          state.ready='good'
        })
        .addCase(postLogIn.rejected, (state, action) => {
          //console.log(action.payload)
          if(Math.floor(action.payload/100)===4){
            state.ready="Incorrect username or password"
          }
        })
    }
  })

  export const { update,updateReady,dropReady } = logIn.actions;
  export default logIn.reducer;
