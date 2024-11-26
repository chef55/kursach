import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
//import FormData from 'form-data'
const initialState={
    ready:{
      description:'',
      file:'',
    }
}

  export const postPost=createAsyncThunk('post/postPost',async(arg, {rejectWithValue})=>{
    const formData = new FormData()
    formData.append('description', arg.description)
    formData.append('file', arg.file[0])
    try{
      const res = await axios.post('http://localhost:3001/post/create',formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials:true,
      })
      return res.data
    }
    catch(error){
      //console.log(error)
      return rejectWithValue(error)
    }
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
        .addCase(postPost.fulfilled, (state, action) => {
          //console.log(action.payload)
        })
        .addCase(postPost.rejected, (state, action) => {
          //console.log(action.payload)
        })
    }
  })

  export const { updateReady } = post.actions;
  export default post.reducer;
