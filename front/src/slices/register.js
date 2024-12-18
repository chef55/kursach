import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import {root} from "../index"
const initialState={
    value:{
    username:'',
    password:''
  }, 
  ready:{
    email: '',
    username: '',
    password: ''
  }
}

  export const postRegister=createAsyncThunk('register/postRegister',async(arg,{rejectWithValue, useDispatch})=>{
    try{
      const res = await axios.post('http://localhost:3001/user/create',arg,{withCredentials:true})
      return res.data
    }
    catch(errors){
      const messages={email:{},username:{},password:{}}
      errors.response.data.message.map(error=>{
        messages[error.property]=error.constraints
      })
      return rejectWithValue(messages)
    }
  })


  export const register=createSlice({
    name: 'register',
    initialState,
    reducers:{
      update: (state,action)=>{
        state.value[action.payload.name]=action.payload.value;
      },
      updateReady:(state,action)=>{
        state.ready[action.payload.name]=action.payload.value;
      },
      dropReady:(state,action)=>{
        state.ready.email=""
        state.ready.username=""
        state.ready.password=""
        //console.log("drop")
      }
    },
    extraReducers(builder) {
      builder
        .addCase(postRegister.fulfilled, (state, action) => {
          state.ready.email='good'
          state.ready.username='good'
          state.ready.password='good'
        })
        .addCase(postRegister.rejected, (state, action) => {
          state.ready.email=Object.values(action.payload.email)[0]
          state.ready.username=Object.values(action.payload.username)[0]
          state.ready.password=Object.values(action.payload.password)[0]
        })
    }
  })

  export const { update,updateReady, dropReady } = register.actions;
  export default register.reducer;
