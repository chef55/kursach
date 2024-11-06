import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    login:false,
    register: false,
  }, 
}

  export const renderWindow=createSlice({
    name: 'render',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
    },
  })

  export const { update} = renderWindow.actions;
  export default renderWindow.reducer;
