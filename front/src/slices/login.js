import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    username:'',
    password:''
  }, 
    ready:{
      username: "good",
      password: "good"
    }
}

  export const postLogIn=createAsyncThunk('inout/fetchData',async(arg)=>{
      const response = await axios.post('http://localhost:3001/auth',arg,{withCredentials:true})
      console.log(response)
      return response.data
    }
  )

  export const logIn=createSlice({
    name: 'login',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
      updateReady:(state,action)=>{
        state.ready[action.payload.name]=action.payload.value;
      }
    },
    extraReducers(builder) {
      builder
        .addCase(postLogIn.fulfilled, (state, action) => {
          state.value.P = action.payload.P
          state.value.T = action.payload.T
        })
        .addCase(postLogIn.rejected, (state, action) => {
        })
    }
  })

  export const { update,updateReady } = logIn.actions;
  export default logIn.reducer;
