import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    username:'',
    password:''
  }, 
  ready:{
    email: "good",
    username: "good",
    password: "good"
  }
}

  export const postRegister=createAsyncThunk('inout/fetchData',async(arg)=>{
      const response = await axios.post('http://localhost:3001/user/create',arg,{withCredentials:true})
      console.log(response)
      return response.data
    }
  )

  export const register=createSlice({
    name: 'register',
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
        .addCase(postRegister.fulfilled, (state, action) => {
          state.ready.P = action.payload.P
          state.ready.T = action.payload.T
        })
        .addCase(postRegister.rejected, (state, action) => {
        })
    }
  })

  export const { update,updateReady } = register.actions;
  export default register.reducer;
