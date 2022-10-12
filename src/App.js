import logo from './logo.svg';
import TicTacToe from './ticTacToe.js';
import placeholder from './placeholder.png'
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">KanScratch</div>
        <div className="Topbar">
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
        <div className="Container">
          <div className="Container">
              <div className="Classrooms">
                Classrooms
                <div style={{border: "2px solid red", width: "fit-content", height: "fit-content"}}>
                  Looks like you aren't in any classrooms yet.
                </div>
              </div>
              <div className="Assignments">
                Assignments
                <div style={{border: "2px solid red", height: "50%"}}>
                  Looks like you don't have any assignments yet.
                </div>
              </div>
          </div>
          <div>
            <div className="AssignmentView">
              Placeholder for assignment
              <img src={placeholder}/>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
