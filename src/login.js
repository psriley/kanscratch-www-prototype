import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import { Link } from "react-router-dom";
import Tbar from "./topbar.js"
  
const LogIn = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Tbar/>
        <h1 className="title">Log in</h1>
        <div className="inputBox">
          <div className="labelText">Username:</div>
          <div><input type="text"></input></div>
        </div>
        <div className="inputBox">
          <div className="labelText">Password:</div>
          <div><input type="password"></input></div>
        </div>
        <div><button>Log In</button></div>
      </header>
    </div>
  );
};
  
export default LogIn;