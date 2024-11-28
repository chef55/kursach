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
      image:null,
      description:null
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
        state.value.post.description=action.payload.description
        state.value.post.image=action.payload.image
        state.value.post.render=action.payload.render
        state.value.post.key=action.payload.key
      }
    },
  })

  export const { update,updatePost} = renderWindow.actions;
  export default renderWindow.reducer;
