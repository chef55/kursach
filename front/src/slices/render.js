import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    login:false,
    register: false,
    post:{
      render:false,
      key:0,
    }
  }, 
}

  export const renderWindow=createSlice({
    name: 'render',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
      updatePost:(state,action)=>{
        state.value.post.key=action.payload.key
        state.value.post.render=action.payload.render
      }
    },
  })

  export const { update,updatePost} = renderWindow.actions;
  export default renderWindow.reducer;
