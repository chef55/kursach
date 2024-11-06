import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    ready:{
      description: true,
      tags: true
    }
}

  export const postPost=createAsyncThunk('inout/fetchData',async(arg)=>{
      const response = await axios.post('http://localhost:3001/auth',arg,{withCredentials:true})
      console.log(response)
      return response.data
    }
  )

  export const post=createSlice({
    name: 'post',
    initialState,
    reducers:{
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

  export const { update,updateReady } = postPost.actions;
  export default postPost.reducer;
