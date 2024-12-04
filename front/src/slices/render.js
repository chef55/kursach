import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    login:false,
    register: false,
    post:false,
    create_post:false,
    upload_button: false,
  }, 
}

  export const renderWindow=createSlice({
    name: 'render',
    initialState,
    reducers:{
      update: (state,action)=>{
        //console.log(action.payload)
        state.value[action.payload.name]=action.payload.value;
      },
      updatePost:(state,action)=>{
        state.value.post.key=action.payload.key
        state.value.post.render=action.payload.render
        state.value.post.id=action.payload.id
        //console.log(action.payload)
      },
    },
  })

  export const { update,updatePost} = renderWindow.actions;
  export default renderWindow.reducer;
