import logo from './images/logo.svg';
import TicTacToe from './ticTacToe.js';
import placeholder from './images/placeholder.png'
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Topbar">
          <Link to="/">
            <div className="logo">KanScratch</div>
          </Link>
          <Link to="/about">
            <div className="btn navigation">About</div>
          </Link>
          <Link to="/signup">
            <div className="btn navigation">Sign up</div>
          </Link>
          <Link to="/login">
            <div className="btn navigation">Log in</div>
          </Link>
          <Link to="/profile">
            <div className="btn navigation">Profile</div>
          </Link>
          <a href="https://scratch.mit.edu/" target="_blank">
            <div className="btn navigation">Scratch Website</div>
          </a>
        </div>
        <div className="Content">
          <div className="Container">
            <div className="Container">
                <div className="Classrooms">
                  Classrooms
                  <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", border: "2px solid red"}}>
                    Looks like you don't have any classrooms yet.
                  </div>
                </div>
                <div className="Assignments">
                  Assignments
                  <div style={{gap: "1vh", display: "flex", flexWrap: "wrap", flexDirection: "column", border: "2px solid red"}}>
                    <img src={placeholder}/>
                    <img src={placeholder}/>
                    <img src={placeholder}/>
                  </div>
                </div>
            </div>
            <div>
              <div className="AssignmentView">
                <div>
                  Details
                  <Link to="/details">
                    <img src={placeholder}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
