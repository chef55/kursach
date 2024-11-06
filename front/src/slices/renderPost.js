import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    login:false,
    register: false,
    post: 0
  }, 
}

  export const getPost=createAsyncThunk('render/getPost',async(arg)=>{
      const response = await axios.get('http://localhost:3001/post/post',arg,{withCredentials:true})
      console.log(response)
      return response.data
    }
  )
  export const getImage=createAsyncThunk('render/getImage',async(arg)=>{
    const response = await axios.get('http://localhost:3001/post/image',arg,{withCredentials:true})
    console.log(response)
    return response.data
  }
)

  export const renderWindow=createSlice({
    name: 'render',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
    },
    extraReducers(builder) {
      builder
        .addCase(getPost.fulfilled, (state, action) => {
          state.value.P = action.payload.P
          state.value.T = action.payload.T
        })
        .addCase(getPost.rejected, (state, action) => {
        })
    }
  })

  export const { update,updateReady } = renderWindow.actions;
  export default renderWindow.reducer;
