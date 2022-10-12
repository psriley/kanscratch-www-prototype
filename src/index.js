import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './about'
import SignUp from './signup'
import LogIn from './login'
import Profile from './profile'
import reportWebVitals from './reportWebVitals';
import TicTacToe from './ticTacToe';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div>
  //   Hello
  // </div>
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
