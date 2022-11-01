import React from "react";
import { Link } from "react-router-dom";
import Tbar from "./topbar";

const SignUp = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Tbar/>
        <h1 className="title">Sign up</h1>
        <div className="inputBox">
          <div className="labelText">Username:</div>
          <div><input type="text"></input></div>
        </div>
        <div className="inputBox">
          <div className="labelText">Password:</div>
          <div><input type="password"></input></div>
        </div>
        <div><button>Sign In</button></div>
      </header>
    </div>
  );
};
  
export default SignUp;