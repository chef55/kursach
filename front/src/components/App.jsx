import '../style.css';
import Header from './header/Header';
import LoginForm from './login/LoginForm';
import Main from './main/Main';
import Profile from './profile/Profile'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes,Route } from 'react-router-dom'
import RegisterForm from './register/RegisterForm';
function App() {
  return (
    <div className="App">
      <Router>
      <Header button_names={["Search", "Subscriptions"]}button_paths={[ '/','/' ]}/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
