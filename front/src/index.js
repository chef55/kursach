import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./slices/login.js"
import registerReducer from "./slices/register.js"
import renderReducer from "./slices/render.js"
import sessionReducer from "./slices/session.js"
import postReducer from "./slices/post.js"
import {Provider} from "react-redux"


const store=configureStore({
  reducer:{
    login: loginReducer,
    register: registerReducer,
    render: renderReducer,
    session: sessionReducer,
    post:postReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
